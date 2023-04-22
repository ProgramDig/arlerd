import { ApiProperty } from "@nestjs/swagger";

export class DegreesGetOneDto {
  @ApiProperty({example:"1", description:"Унікайльний ідентифікато",  type: String})
  readonly id: string
}