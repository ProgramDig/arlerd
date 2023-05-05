import { Body, Controller, Get, Post } from "@nestjs/common";
import { TestService } from "./test.service";
import { Test } from "./test.model";

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {
  }

  @Post("/create")
  create(@Body() dto:{date: string, unit: string, countUPD: number}):Promise<Test>{
    return this.testService.create(dto);
  }

  @Get("/all")
  getAll():Promise<Test[]> {
    return this.testService.getAll()
  }
}
