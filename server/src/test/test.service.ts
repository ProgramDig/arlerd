import { Inject, Injectable } from "@nestjs/common";
import { Test } from "./test.model";

@Injectable()
export class TestService {

  constructor(@Inject("test") private testRepository: typeof Test) {
  }

  async create(dto: { date: string, unit: string, countUPD: number }): Promise<Test> {
    return await this.testRepository.create(dto);
  }

  async getAll(): Promise<Test[]> {
    return await this.testRepository.findAll();
  }
}
