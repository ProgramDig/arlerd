import { Body, Controller, Post } from "@nestjs/common";
import { GenerateService } from "../services/generate.service";

@Controller('generate')
export class GenerateController {
  constructor(private generateService: GenerateService) {
  }

  @Post("go")
  generate(@Body() data) {
    return this.generateService.generatePlan(data);
  }
}
