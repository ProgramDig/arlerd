import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Значення ролі" })
  readonly value: string
}