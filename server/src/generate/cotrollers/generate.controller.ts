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
    return this.generateService.dataProcessor(dto);
  }
}
