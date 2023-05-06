import { RanksCreateDto } from './RanksCreate.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RanksCreateManyDto {
  @ApiProperty({ description: 'Ліст звань' })
  list: RanksCreateDto[];
}
