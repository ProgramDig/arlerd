import { Inject, Injectable } from "@nestjs/common";
import { YearCreateDto } from "../dto/YearCreate.dto";
import { YEAR_REPOSITORY } from "../year.constant";
import { Year } from "../models/year.model";

@Injectable()
export class YearService {

  constructor(@Inject(YEAR_REPOSITORY) private yearRepository: typeof Year) {
  }

  async create(dto: YearCreateDto): Promise<Year> {
    return await this.yearRepository.create(dto);
  }

  async getAll(): Promise<Year[]> {
    return await this.yearRepository.findAll();
  }
}
