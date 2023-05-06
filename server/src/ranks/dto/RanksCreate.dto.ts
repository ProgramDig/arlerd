import { ApiProperty } from '@nestjs/swagger';

export class RanksCreateDto {
  @ApiProperty({ example: 'Солдат', description: 'Значення звання' })
  readonly value: string;
}
