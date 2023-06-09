import { Body, Controller, Post } from "@nestjs/common";
import { GenerateService } from "../services/generate.service";
import { DataProcessorDto } from "../dto/DataProcessor.dto";
import { WorkLoad } from "../generate.interfaces";

@Controller("generate")
export class GenerateController {
  constructor(private generateService: GenerateService) {
  }

  @Post("go")
  generate(@Body() data) {
    return this.generateService.generateDocx(data);
  }

  @Post("data-processor")
  dataProcessor(@Body() dto: DataProcessorDto): Promise<WorkLoad> {
    console.log(dto)
    return this.generateService.dataProcessor(dto);
  }

  @Post("data-processor-many")
  dataProcessorMany(@Body() dtos: DataProcessorDto[]) {
    return this.generateService.dataProcessorMany(dtos);
  }
}
