export class DataProcessorDto {
  readonly idTeacher: number;
  readonly idYear: number;
  readonly idDepartment: number;
  readonly firstSemester: Semester;
  readonly secondSemester: Semester;
}

export interface Semester {
  readonly data: Data[];
}

export interface Data {
  idDiscipline: number;
  idGroups: number[];
}