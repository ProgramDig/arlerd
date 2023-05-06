import { DegreesCreateDto } from './DegreesCreate.dto';
import { ApiProperty } from '@nestjs/swagger';

export class DegreesCreateManyDto {
  @ApiProperty({
    example: "[Ад'юнкт, Молодший спеціаліст]",
    description: 'Опис ролі',
  })
  readonly list: DegreesCreateDto[];
}
