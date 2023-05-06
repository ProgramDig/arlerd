import { ApiProperty } from '@nestjs/swagger';

export class DegreesCreateDto {
  @ApiProperty({ example: "Ад'юнкт", description: 'Опис наукового звання' })
  readonly value: string;
}
