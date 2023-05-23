import { Injectable, Logger } from "@nestjs/common";

import * as PizZip from "pizzip";
import * as fs from "fs";
import * as path from "path";

import { DisciplineTeacherYearService } from "../../discipline-teacher-year/services/discipline-teacher-year.service";
import { DataProcessorDto } from "../dto/DataProcessor.dto";
import { GroupService } from "../../group/services/group.service";
import { DepartmentService } from "../../department/services/department.service";
import { TeacherService } from "../../teacher/services/teacher.service";
import { DisciplineService } from "../../discipline/services/discipline.service";
import { YearService } from "../../year/services/year.service";
import { Group } from "../../group/models/group.model";
import { Teacher } from "../../teacher/models/teacher.model";
import { Department } from "../../department/models/department.model";
import { Discipline } from "../../discipline/models/discipline.model";
import { Year } from "../../year/models/year.model";
import { PositionService } from "../../position/services/position.service";
import { Position } from "../../position/models/position.model";
import { RanksService } from "../../ranks/services/ranks.service";
import { correlationsOrder155 } from "../generate.constant";
import { SemesterInfo, WorkLoad } from "../generate.interfaces";
import { Item, LoadItem } from "../interfaces/main";

const Docxtemplater = require("docxtemplater");

@Injectable()
export class GenerateService {
  constructor(
    private disciplineTeacherYearService: DisciplineTeacherYearService,
    private groupService: GroupService,
    private departmentService: DepartmentService,
    private teacherService: TeacherService,
    private disciplineService: DisciplineService,
    private yearService: YearService,
    private positionService: PositionService,
    private ranksService: RanksService) {
  }

  async dataProcessor(dto: DataProcessorDto): Promise<WorkLoad> {
    const { idTeacher, idYear, idDepartment, secondSemester, firstSemester }: DataProcessorDto = dto;
    const firstSemesterInfo: SemesterInfo = { data: [] };
    const secondSemesterInfo: SemesterInfo = { data: [] };

    const teacher: Teacher = await this.teacherService.getByPk(idTeacher);
    const department: Department = await this.departmentService.getOneByPk(idDepartment);
    const years: Year = await this.yearService.getOneByPk(idYear);
    const departmentCommander: Position = await this.positionService.getDepartmentCommander({ idDepartment: department.id });

    for (const firstSemesterElement of firstSemester.data) {
      firstSemesterInfo.data.push({
        discipline: await this.disciplineService.getOneByPk(firstSemesterElement.idDiscipline),
        groups: await this.groupService.getManyByPk(firstSemesterElement.idGroups)
      });
    }

    for (const secondSemesterElement of secondSemester.data) {
      secondSemesterInfo.data.push({
        discipline: await this.disciplineService.getOneByPk(secondSemesterElement.idDiscipline),
        groups: await this.groupService.getManyByPk(secondSemesterElement.idGroups)
      });
    }

    return this.calculatingWorkLoad(teacher, department, years, departmentCommander, firstSemesterInfo, secondSemesterInfo);
  }

  async calculatingWorkLoad(teacher: Teacher, department: Department, years: Year, departmentCommander: Position, firstSemesterInfo: SemesterInfo, secondSemesterInfo: SemesterInfo) {
    const commander: Teacher = departmentCommander.teachers[0];
    commander.rank = await this.ranksService.getOne(commander.idRank);

    const workLoad: WorkLoad = {
      departmentFullName: department.name,
      departmentCode: department.number,
      departmentCommanderRank: commander.rank.value.toLowerCase(),
      departmentCommanderFirstName: commander.firstName.charAt(0),
      departmentCommanderSecondName: commander.secondName,
      nowYear: years.value,
      fromTheYear: years.value,
      upToYear: Number(years.value) + 1,
      teacherPosition: teacher.positions[0].value.toLowerCase(),
      positionRate: "ставка",
      teacherDegree: teacher.degree.value.toLowerCase(),
      teacherRank: teacher.rank.value.toLowerCase(),
      teacherSecondName: teacher.secondName,
      teacherFirstName: teacher.firstName,
      teacherThirdName: teacher.thirdName,
      firstSemester: 1,
      disciplines: [],
      _semesterTotalDisciplinesHours: 0,
      semesterLectures: this.getDisciplinesHours(firstSemesterInfo, "semesterLecturesHours"),
      semesterGroup: this.getDisciplinesHours(firstSemesterInfo, "semesterGroupSeminarHours"),
      semesterPractice: this.getDisciplinesHours(firstSemesterInfo, "semesterPractiseHours"),
      semesterVerificationLaboratoryWork: 0,
      semesterConductingTacticalTraining: 0,
      disciplinesLoad: [],
      semesterHoldingConsultation: 0,
      semesterGuidelinesDefenseTermPapers: 0,
      semesterCheckingControl: 0,
      semesterConductingExam: 0,
      semesterManagementMilitaryInternships: 0,
      semesterGuidanceConsultationReview: 0,
      semesterDefenseCertificationWorks: 0,
      semesterConductingComprehensiveExaminations: 0,
      semesterConductingOtherWorks: 0,
      semesterTotal: 0,
      secondSemester: 2,
      fromTheNextYear: Number(years.value) + 1,
      upToNextYear: Number(years.value) + 2,
      disciplinesNextSemester: [],
      nextSemesterLectures: this.getDisciplinesHours(secondSemesterInfo, "semesterLecturesHours"),
      nextSemesterGroup: this.getDisciplinesHours(secondSemesterInfo, "semesterGroupSeminarHours"),
      nextSemesterPractice: this.getDisciplinesHours(secondSemesterInfo, "semesterPractiseHours"),
      nextSemesterVerificationLaboratoryWork: 0,
      nextSemesterConductingTacticalTraining: 0,
      yearLectures: this.getYearDisciplinesHours(firstSemesterInfo, secondSemesterInfo, "semesterLecturesHours"),
      yearGroup: this.getYearDisciplinesHours(firstSemesterInfo, secondSemesterInfo, "semesterGroupSeminarHours"),
      yearPractice: this.getYearDisciplinesHours(firstSemesterInfo, secondSemesterInfo, "semesterPractiseHours"),
      yearVerificationLaboratoryWork: 0,
      yearConductingTacticalTraining: 0,
      disciplinesNextSemesterLoad: [],
      nextSemesterHoldingConsultation: 0,
      nextSemesterGuidelinesDefenseTermPapers: 0,
      nextSemesterCheckingControl: 0,
      nextSemesterConductingExam: 0,
      nextSemesterManagementMilitaryInternships: 0,
      nextSemesterGuidanceConsultationReview: 0,
      nextSemesterDefenseCertificationWorks: 0,
      nextSemesterConductingComprehensiveExaminations: 0,
      nextSemesterConductingOtherWorks: 0,
      nextSemesterTotal: 0,
      yearHoldingConsultation: 0,
      yearGuidelinesDefenseTermPapers: 0,
      yearCheckingControl: 0,
      yearConductingExam: 0,
      yearManagementMilitaryInternships: 0,
      yearGuidanceConsultationReview: 0,
      yearDefenseCertificationWorks: 0,
      yearConductingComprehensiveExaminations: 0,
      yearConductingOtherWorks: 0,
      yearTotal: 0
    };

    const generateDiscipline = (semesterInfo: SemesterInfo): void => {
      const { data } = semesterInfo;

      for (const element of data) {
        const { discipline, groups } = element;

        for (const group of groups) {
          const item: Item = {
            _id: group.id,
            name: discipline.nameEducationalComponent,
            codeSpecialize: group.specialty.shorthand,
            courseStudy: Number(new Date().getFullYear()) - Number(group.course.yearRecruit),
            countOfGroup: group.cadetCount,
            groupCode: group.groupCode,
            totalLectures: discipline.semesterLecturesHours,
            totalGroup: discipline.semesterGroupSeminarHours,
            totalPractice: discipline.semesterPractiseHours,
            verificationLaboratoryWork: 0,
            conductingTacticalTraining: 0,
            _totalHours: 0
          };

          item._totalHours =
            item.totalLectures +
            item.totalGroup +
            item.totalPractice +
            item.verificationLaboratoryWork +
            item.conductingTacticalTraining;
          workLoad.disciplines.push(item);
        }
      }
    };

    const generateDisciplineWorkLoad = (semesterInfo: SemesterInfo): void => {
      const { data } = semesterInfo;

      for (const element of data) {
        const { discipline, groups } = element;

        for (const group of groups) {
          const item: LoadItem = {
            holdingConsultation: this.getConsultation(group, discipline), // fix
            guidelinesDefenseTermPapers:
              discipline.semesterCourseWorkCount < 0
                ?
                correlationsOrder155.MANAGEMENT_WORK.COURSE_PROJECT * group.cadetCount
                :
                0,
            checkingControl:
              discipline.semesterRGRWorkCount < 0
                ?
                correlationsOrder155.CHECK.RGR * group.cadetCount
                :
                0,
            conductingExam:
              discipline.isSemesterExamControl
                ?
                correlationsOrder155.HOLDING.EXAM * group.cadetCount
                :
                discipline.isSemesterTestControl
                  ?
                  correlationsOrder155.HOLDING.TEST * group.cadetCount
                  :
                  0,
            managementMilitaryInternships: 0, // fix
            guidanceConsultationReview: 0, // fix
            defenseCertificationWorks: 0, // fix
            conductingComprehensiveExaminations: 0, // fix
            conductingOtherWorks: 0, // fix
            total: 0
          };

          item.total = this.calculateTotalSum(item) + workLoad.disciplines.filter(disc => disc._id === group.id)[0]._totalHours;
          workLoad.disciplinesLoad.push(item);
        }
      }
    };

    const generateTotalDisciplineWorkLoad = (): void => {
      for (let i: number = 0; i < workLoad.disciplinesLoad.length; i++) {
        workLoad.semesterHoldingConsultation += workLoad.disciplinesLoad[i].holdingConsultation;
        workLoad.semesterGuidelinesDefenseTermPapers += workLoad.disciplinesLoad[i].guidelinesDefenseTermPapers;
        workLoad.semesterCheckingControl += workLoad.disciplinesLoad[i].checkingControl;
        workLoad.semesterConductingExam += workLoad.disciplinesLoad[i].conductingExam;
        workLoad.semesterManagementMilitaryInternships += workLoad.disciplinesLoad[i].managementMilitaryInternships;
        workLoad.semesterGuidanceConsultationReview += workLoad.disciplinesLoad[i].guidanceConsultationReview;
        workLoad.semesterDefenseCertificationWorks += workLoad.disciplinesLoad[i].defenseCertificationWorks;
        workLoad.semesterConductingComprehensiveExaminations += workLoad.disciplinesLoad[i].conductingComprehensiveExaminations;
        workLoad.semesterConductingOtherWorks += workLoad.disciplinesLoad[i].conductingOtherWorks;
      }

      workLoad.semesterTotal =
        workLoad.disciplinesLoad.reduce((acc, item) => item.total + acc, 0) +
        workLoad.semesterHoldingConsultation +
        workLoad.semesterGuidelinesDefenseTermPapers +
        workLoad.semesterCheckingControl +
        workLoad.semesterConductingExam +
        workLoad.semesterManagementMilitaryInternships +
        workLoad.semesterGuidanceConsultationReview +
        workLoad.semesterDefenseCertificationWorks +
        workLoad.semesterConductingComprehensiveExaminations +
        workLoad.semesterConductingOtherWorks;
      workLoad.semesterTotal = parseFloat(workLoad.semesterTotal.toFixed(1));
    };

    const generateNextSemesterDiscipline = (semesterInfo: SemesterInfo): void => {
      const { data } = semesterInfo;

      for (const element of data) {
        const { discipline, groups } = element;

        for (const group of groups) {
          const item: Item = {
            _id: group.id,
            name: discipline.nameEducationalComponent,
            codeSpecialize: group.specialty.shorthand,
            courseStudy: Number(new Date().getFullYear()) - Number(group.course.yearRecruit),
            countOfGroup: group.cadetCount,
            groupCode: group.groupCode,
            totalLectures: discipline.semesterLecturesHours,
            totalGroup: discipline.semesterGroupSeminarHours,
            totalPractice: discipline.semesterPractiseHours,
            verificationLaboratoryWork: 0,
            conductingTacticalTraining: 0,
            _totalHours: 0
          };

          item._totalHours =
            item.totalLectures +
            item.totalGroup +
            item.totalPractice +
            item.verificationLaboratoryWork +
            item.conductingTacticalTraining;
          workLoad.disciplinesNextSemester.push(item);
        }
      }
    };

    const generateNextSemesterDisciplineWorkLoad = (semesterInfo: SemesterInfo): void => {
      const { data } = semesterInfo;

      for (const element of data) {
        const { discipline, groups } = element;

        for (const group of groups) {
          const item: LoadItem = {
            holdingConsultation: this.getConsultation(group, discipline), // fix
            guidelinesDefenseTermPapers:
              discipline.semesterCourseWorkCount < 0
                ?
                correlationsOrder155.MANAGEMENT_WORK.COURSE_PROJECT * group.cadetCount
                :
                0,
            checkingControl:
              discipline.semesterRGRWorkCount < 0
                ?
                correlationsOrder155.CHECK.RGR * group.cadetCount
                :
                0,
            conductingExam:
              discipline.isSemesterExamControl
                ?
                correlationsOrder155.HOLDING.EXAM * group.cadetCount
                :
                discipline.isSemesterTestControl
                  ?
                  correlationsOrder155.HOLDING.TEST * group.cadetCount
                  :
                  0,
            managementMilitaryInternships: 0, // fix
            guidanceConsultationReview: 0, // fix
            defenseCertificationWorks: 0, // fix
            conductingComprehensiveExaminations: 0, // fix
            conductingOtherWorks: 0, // fix
            total: 0
          };

          item.total = this.calculateTotalSum(item) + workLoad.disciplines.filter(disc => disc._id === group.id)[0]._totalHours;
          workLoad.disciplinesNextSemesterLoad.push(item);
        }
      }
    };

    const generateTotalNextSemesterDisciplineWorkLoad = (): void => {
      for (let i: number = 0; i < workLoad.disciplinesNextSemesterLoad.length; i++) {
        workLoad.nextSemesterHoldingConsultation += workLoad.disciplinesNextSemesterLoad[i].holdingConsultation;
        workLoad.nextSemesterGuidelinesDefenseTermPapers += workLoad.disciplinesNextSemesterLoad[i].guidelinesDefenseTermPapers;
        workLoad.nextSemesterCheckingControl += workLoad.disciplinesNextSemesterLoad[i].checkingControl;
        workLoad.nextSemesterConductingExam += workLoad.disciplinesNextSemesterLoad[i].conductingExam;
        workLoad.nextSemesterManagementMilitaryInternships += workLoad.disciplinesNextSemesterLoad[i].managementMilitaryInternships;
        workLoad.nextSemesterGuidanceConsultationReview += workLoad.disciplinesNextSemesterLoad[i].guidanceConsultationReview;
        workLoad.nextSemesterDefenseCertificationWorks += workLoad.disciplinesNextSemesterLoad[i].defenseCertificationWorks;
        workLoad.nextSemesterConductingComprehensiveExaminations += workLoad.disciplinesNextSemesterLoad[i].conductingComprehensiveExaminations;
        workLoad.nextSemesterConductingOtherWorks += workLoad.disciplinesNextSemesterLoad[i].conductingOtherWorks;
      }

      workLoad.nextSemesterTotal =
        workLoad.disciplinesNextSemesterLoad.reduce((acc, item) => item.total + acc, 0) +
        workLoad.nextSemesterHoldingConsultation +
        workLoad.nextSemesterGuidelinesDefenseTermPapers +
        workLoad.nextSemesterCheckingControl +
        workLoad.nextSemesterConductingExam +
        workLoad.nextSemesterManagementMilitaryInternships +
        workLoad.nextSemesterGuidanceConsultationReview +
        workLoad.nextSemesterDefenseCertificationWorks +
        workLoad.nextSemesterConductingComprehensiveExaminations +
        workLoad.nextSemesterConductingOtherWorks;
      workLoad.nextSemesterTotal = parseFloat(workLoad.nextSemesterTotal.toFixed(1));
    };

    const generateYearDisciplineWorkLoad = (): void => {
      workLoad.yearHoldingConsultation += workLoad.semesterHoldingConsultation + workLoad.nextSemesterHoldingConsultation;
      workLoad.yearGuidelinesDefenseTermPapers += workLoad.semesterGuidelinesDefenseTermPapers + workLoad.nextSemesterGuidelinesDefenseTermPapers;
      workLoad.yearCheckingControl += workLoad.semesterCheckingControl + workLoad.nextSemesterCheckingControl;
      workLoad.yearConductingExam += workLoad.semesterConductingExam + workLoad.nextSemesterConductingExam;
      workLoad.yearManagementMilitaryInternships += workLoad.semesterManagementMilitaryInternships + workLoad.nextSemesterManagementMilitaryInternships;
      workLoad.yearGuidanceConsultationReview += workLoad.semesterGuidanceConsultationReview + workLoad.nextSemesterGuidanceConsultationReview;
      workLoad.yearDefenseCertificationWorks += workLoad.semesterDefenseCertificationWorks + workLoad.nextSemesterDefenseCertificationWorks;
      workLoad.yearConductingComprehensiveExaminations += workLoad.semesterConductingComprehensiveExaminations + workLoad.nextSemesterConductingComprehensiveExaminations;
      workLoad.yearConductingOtherWorks += workLoad.semesterConductingOtherWorks + workLoad.nextSemesterConductingOtherWorks;

      workLoad.yearTotal += workLoad.semesterTotal + workLoad.nextSemesterTotal;
      workLoad.yearTotal = parseFloat(workLoad.yearTotal.toFixed(1));
    };

    generateDiscipline(firstSemesterInfo);
    generateDisciplineWorkLoad(firstSemesterInfo);
    generateTotalDisciplineWorkLoad();

    generateNextSemesterDiscipline(secondSemesterInfo);
    generateNextSemesterDisciplineWorkLoad(secondSemesterInfo);
    generateTotalNextSemesterDisciplineWorkLoad();

    generateYearDisciplineWorkLoad();

    this.generateDocx(workLoad); // generate docx file

    return workLoad;
  }


  // generateCourseWork(groups: Group[]): number {
  //   let resultCount: number = 0;
  //   for (const group of groups) {
  //     resultCount *= correlationsOrder155.MANAGEMENT_WORK.COURSE_PROJECT * group.cadetCount;
  //   }
  //   return resultCount;
  // }

  getConsultation(group: Group, discipline: Discipline): number {
    return group.cadetCount * 0.10 + discipline.semesterLecturesHours * 0.15;
  }

  calculateTotalSum(object): number {
    let sum: number = 0;
    for (const key in object) {
      if (typeof object[key] === "number") {
        sum += object[key];
      }
    }
    return sum;
  }

  getDisciplinesHours(semesterInfo: SemesterInfo, param: string): number {
    let semesterHours: number = 0;

    semesterInfo.data.forEach((item, index) => {
      const { discipline, groups } = item;
      for (const key in discipline.dataValues) {
        if (key === param) {
          if (key === "semesterLecturesHours") {
            if (index === 0) {
              semesterHours += this.getSemesterHours(groups, discipline, key);
            }
            if (groups[index + 1] != undefined && groups[index].course.name !== groups[index + 1].course.name) {
              semesterHours += discipline[key];
            }
          } else {
            semesterHours += this.getSemesterHours(groups, discipline, key);
          }
        }
      }
    });

    return semesterHours;
  }

  getYearDisciplinesHours(firstSemesterInfo: SemesterInfo, secondSemesterInfo: SemesterInfo, param: string): number {
    let yearHours: number = 0;

    firstSemesterInfo.data.forEach((item, index) => {
      const { discipline, groups } = item;
      for (const key in discipline.dataValues) {
        if (key === param) {
          if (key === "semesterLecturesHours") {
            if (index === 0) {
              yearHours += this.getSemesterHours(groups, discipline, key);
            }
            if (groups[index + 1] != undefined && groups[index].course.name !== groups[index + 1].course.name) {
              yearHours += discipline[key];
            }
          } else {
            yearHours += this.getSemesterHours(groups, discipline, key);
          }
        }
      }
    });

    secondSemesterInfo.data.forEach((item, index) => {
      const { discipline, groups } = item;
      for (const key in discipline.dataValues) {
        if (key === param) {
          if (key === "semesterLecturesHours") {
            if (index === 0) {
              yearHours += this.getSemesterHours(groups, discipline, key);
            }
            if (groups[index + 1] != undefined && groups[index].course.name !== groups[index + 1].course.name) {
              yearHours += discipline[key];
            }
          } else {
            yearHours += this.getSemesterHours(groups, discipline, key);
          }
        }
      }
    });

    return yearHours;
  }

  getSemesterHours(groups: Group[], discipline: Discipline, param: string): number {
    let result: number = 0;
    for (let i: number = 0; i < groups.length; i++) {
      if (param === "semesterLecturesHours") {
        if (result === 0) {
          result += discipline[param];
        }
        if (groups[i + 1] != undefined && groups[i].course.name !== groups[i + 1].course.name) {
          result += discipline[param];
        }
      } else {
        result += discipline[param];
      }
    }
    return result;
  }

  generateDocx(data) {
    const dirPath: string = path.join(__dirname + "../../../../public");
    const template: string = fs.readFileSync(`${dirPath}/template/template.docx`, "binary");
    const zip: PizZip = new PizZip(template);
    const docx = new Docxtemplater();

    docx.loadZip(zip);
    docx.setData(data);
    docx.render();

    const output = docx.getZip().generate({ type: "nodebuffer" });
    const outputName: string = `Індивідувальний план ${data.teacherSecondName} ${data.fromTheYear}-${data.upToYear}`;
    fs.writeFileSync(`${dirPath}/output/${outputName} ${new Date().getTime()}.docx`, output);
    Logger.log(`Docx file created! Name [${outputName}]`);

    return output;
  }
}