export class DataProcessorDto {
  readonly idTeacher: number | undefined;
  readonly idYear: number | undefined;
  readonly idDepartment: number | undefined;
  readonly firstSemester: Semester | undefined;
  readonly secondSemester: Semester | undefined;
}

export interface Semester {
  readonly data: Data[] | undefined;
}

export interface Data {
  idDiscipline: number | undefined;
  idGroups: number[] | undefined;
}