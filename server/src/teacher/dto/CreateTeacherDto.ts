export class CreateTeacherDto {
  readonly firstName: string
  readonly secondName: string
  readonly thirdName: string
  readonly dateOfBirth?: Date;
  readonly phoneNumber?: string;
  readonly idRank: number
  readonly idDegree: number
  readonly idUserLogin: number
}