import { Group } from "../group/models/group.model";
import { Discipline } from "../discipline/models/discipline.model";
import { Item, LoadItem } from "./interfaces/main";

export interface SemesterInfo {
  data: Data[];
}

export interface Data {
  discipline: Discipline;
  groups: Group[];
}

export interface WorkLoad {
  departmentFullName: string,
  departmentCode: number,
  departmentCommanderRank: string,
  departmentCommanderFirstName: string,
  departmentCommanderSecondName: string,
  nowYear: string,
  fromTheYear: string,
  upToYear: number,
  teacherPosition: string,
  positionRate: string,
  teacherDegree: string,
  teacherRank: string,
  teacherSecondName: string,
  teacherFirstName: string,
  teacherThirdName: string,
  firstSemester: number,
  disciplines: Item[],
  _semesterTotalDisciplinesHours: number,
  semesterLectures: number,
  semesterGroup: number,
  semesterPractice: number,
  semesterVerificationLaboratoryWork: number,
  semesterConductingTacticalTraining: number,
  disciplinesLoad: LoadItem[],
  semesterHoldingConsultation: number,
  semesterGuidelinesDefenseTermPapers: number,
  semesterCheckingControl: number,
  semesterConductingExam: number,
  semesterManagementMilitaryInternships: number,
  semesterGuidanceConsultationReview: number,
  semesterDefenseCertificationWorks: number,
  semesterConductingComprehensiveExaminations: number,
  semesterConductingOtherWorks: number,
  semesterTotal: number,
  secondSemester: number,
  fromTheNextYear: number,
  upToNextYear: number,
  disciplinesNextSemester: Item[],
  nextSemesterLectures: number,
  nextSemesterGroup: number,
  nextSemesterPractice: number,
  nextSemesterVerificationLaboratoryWork: number,
  nextSemesterConductingTacticalTraining: number,
  yearLectures: number,
  yearGroup: number,
  yearPractice: number,
  yearVerificationLaboratoryWork: number,
  yearConductingTacticalTraining: number,
  disciplinesNextSemesterLoad: LoadItem[],
  nextSemesterHoldingConsultation: number,
  nextSemesterGuidelinesDefenseTermPapers: number,
  nextSemesterCheckingControl: number,
  nextSemesterConductingExam: number,
  nextSemesterManagementMilitaryInternships: number,
  nextSemesterGuidanceConsultationReview: number,
  nextSemesterDefenseCertificationWorks: number,
  nextSemesterConductingComprehensiveExaminations: number,
  nextSemesterConductingOtherWorks: number,
  nextSemesterTotal: number,
  yearHoldingConsultation: number,
  yearGuidelinesDefenseTermPapers: number,
  yearCheckingControl: number,
  yearConductingExam: number,
  yearManagementMilitaryInternships: number,
  yearGuidanceConsultationReview: number,
  yearDefenseCertificationWorks: number,
  yearConductingComprehensiveExaminations: number,
  yearConductingOtherWorks: number,
  yearTotal: number
}