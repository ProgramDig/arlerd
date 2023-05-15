interface Discipline {
  name: string;
  codeSpecialize: string;
  courseStudy: number;
  countOfGroup: number;
  groupCode: number;
  totalLectures: number;
  totalGroup: number;
  totalPractice: number;
  verificationLaboratoryWork: number;
  conductingTacticalTraining: number;
}

interface DisciplinesLoad {
  holdingСonsultations: number;
  guidelinesDefenseTermPapers: number;
  checkingControl: number;
  conductingExam: number;
  managementMilitaryInternships: number;
  guidanceConsultationReview: number;
  defenseCertificationWorks: number;
  conductingComprehensiveExaminations: number;
  conductingOtherWorks: number;
  total: number;
}

interface Semester {
  lectures: number;
  group: number;
  practice: number;
  verificationLaboratoryWork: number;
  conductingTacticalTraining: number;
  disciplinesLoad: DisciplinesLoad[];
  holdingСonsultations: number;
  guidelinesDefenseTermPapers: number;
  checkingControl: number;
  conductingExam: number;
  managementMilitaryInternships: number;
  guidanceConsultationReview: number;
  defenseCertificationWorks: number;
  conductingComprehensiveExaminations: number;
  conductingOtherWorks: number;
  total: number;
}

interface Department {
  departmentFullName: string;
  departmentCode: number;
  departmentCommanderRank: string;
  departmentCommanderFirstName: string;
  departmentCommanderSecondName: string;
  nowYear: string;
  fromTheYear: string;
  upToYear: string;
  teacherPosition: string;
  positionRate: string;
  teacherDegree: string;
  teacherRank: string;
  teacherSecondName: string;
  teacherFirstName: string;
  teacherThirdName: string;
  firstSemester: number;
  disciplines: Discipline[];
  semester1: Semester;
  secondSemester: number;
  fromTheNextYear: string;
  upToNextYear: string;
  disciplinesNextSemester: Discipline[];
  semester2: Semester;
}