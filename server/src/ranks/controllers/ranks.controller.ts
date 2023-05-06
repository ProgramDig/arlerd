import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RanksService } from '../services/ranks.service';
import { RanksCreateDto } from '../dto/RanksCreate.dto';
import { Ranks } from '../models/ranks.model';
import { RanksCreateManyDto } from '../dto/RanksCreateMany.dto';

@ApiTags('Звання')
@Controller('ranks')
export class RanksController {
  constructor(private ranksService: RanksService) {}

  @ApiOperation({ summary: 'Створення звання' })
  @ApiResponse({ status: 200, type: Ranks })
  @Post('/create')
  create(@Body() dto: RanksCreateDto): Promise<Ranks> {
    return this.ranksService.create(dto);
  }

  @ApiOperation({ summary: 'Створення лісту звань' })
  @ApiResponse({ status: 200, type: String })
  @Post('/create-many')
  createMany(@Body() dto: RanksCreateManyDto): Promise<string> {
    return this.ranksService.createMany(dto);
  }

  @ApiOperation({ summary: 'Отримання лісту звань' })
  @ApiResponse({ status: 200, type: Array<Ranks> })
  @Get('/all')
  getAll(): Promise<Ranks[]> {
    return this.ranksService.getAll();
  }

  @ApiOperation({ summary: 'Отримання поточного звання' })
  @ApiResponse({ status: 200, type: Ranks })
  @Get('/:value')
  getOne(@Param('value') value: string): Promise<Ranks> {
    return this.ranksService.getOne(value);
  }
}
