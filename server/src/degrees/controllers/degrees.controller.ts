import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DegreesService } from '../services/degrees.service';
import { DegreesCreateDto } from '../dto/DegreesCreate.dto';
import { DegreesCreateManyDto } from '../dto/DegreesCreateMany.dto';
import { Degrees } from '../models/degrees.model';
import { DegreesGetOneDto } from '../dto/DegreesGetOne.dto';

@ApiTags('Наукові звання')
@Controller('degrees')
export class DegreesController {
  constructor(private degreesService: DegreesService) {}

  @ApiOperation({ summary: 'Створення наукового звання' })
  @ApiResponse({ status: 200, type: Degrees })
  @Post('/create')
  create(@Body() dto: DegreesCreateDto): Promise<Degrees> {
    return this.degreesService.create(dto);
  }

  @ApiOperation({ summary: 'Створення лісту наукового звання' })
  @ApiResponse({ status: 200, type: String })
  @Post('/create-many')
  createMany(@Body() dto: DegreesCreateManyDto): Promise<string> {
    return this.degreesService.createMany(dto);
  }

  @ApiOperation({ summary: 'Отримання лісту наукового звання' })
  @ApiResponse({ status: 200, type: Array<Degrees> })
  @Get('/all')
  getAll(): Promise<Degrees[]> {
    return this.degreesService.getAll();
  }

  @ApiOperation({ summary: 'Отримання  наукового звання' })
  @ApiResponse({ status: 200, type: Degrees })
  @Get('/:id')
  getOne(@Param() { id }: DegreesGetOneDto): Promise<Degrees> {
    return this.degreesService.getOne(Number(id));
  }
}
