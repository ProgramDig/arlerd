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

const Docxtemplater = require("docxtemplater");

@Injectable()
export class GenerateService {
  constructor(
    private disciplineTeacherYearService: DisciplineTeacherYearService,
    private groupService: GroupService,
    private departmentService: DepartmentService,
    private teacherService: TeacherService,
    private disciplineService: DisciplineService,
    private yearService: YearService) {
  }

  calculatingWorkLoad(discipline: Discipline, group: Group) {
    // const workLoad = {
    //   count: group.cadetCount,
    //   hours: {
    //     lecture: discipline.semesterLecturesHours,
    //     groupSeminar: discipline.semesterGroupSeminarHours,
    //     checkReport: 0,
    //     holdingTactic: 0,
    //   },
    //   load: {
    //     lectureCount: discipline.semesterLecturesHours * correlationsOrder155.LECTURE_LESSON,
    //     groupSeminarCount: discipline.semesterGroupSeminarHours * correlationsOrder155.GROUP_LESSON,
    //   }
    // }

    const workLoad = {
      disciplines: [
        {
          "name": discipline.nameEducationalComponent,
          "codeSpecialize": group.specialty.shorthand,
          "courseStudy": Number(new Date().getFullYear()) - Number(group.course.yearRecruit),
          "countOfGroup": group.cadetCount,
          "groupCode": group.groupCode,
          "totalLectures": discipline.semesterLecturesHours,
          "totalGroup": discipline.semesterGroupSeminarHours,
          "totalPractice": discipline.semesterPractiseHours,
          "verificationLaboratoryWork": 0,
          "conductingTacticalTraining": 0
        }
      ]
    };


    return workLoad;
  }

  async dataProcessor(dto: DataProcessorDto) {
    const { groupsId, idTeacher, idDiscipline, idYear, idDepartment }: DataProcessorDto = dto;

    const groups: Group[] = await this.groupService.getManyByPk(groupsId);
    const teacher: Teacher = await this.teacherService.getByPk(idTeacher);
    const department: Department = await this.departmentService.getOneByPk(idDepartment);
    const discipline: Discipline = await this.disciplineService.getOneByPk(idDiscipline);
    const years: Year = await this.yearService.getOneByPk(idYear);

    return this.calculatingWorkLoad(discipline, groups[0]);
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
    fs.writeFileSync(`${dirPath}/output/${outputName}.docx`, output);
    Logger.log(`Docx file created! Name [${outputName}]`);
    return output;
  }
}
