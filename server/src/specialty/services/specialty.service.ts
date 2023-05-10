import { Inject, Injectable } from "@nestjs/common";
import { SPECIALTY_REPOSITORY } from "../specialty.constant";
import { Specialty } from "../models/specialty.model";
import { CreateSpecialtyDto } from "../dto/CreateSpecialty.dto";

@Injectable()
export class SpecialtyService {
  constructor(@Inject(SPECIALTY_REPOSITORY) private specialtyRepository: typeof Specialty) {
  }

  async create(dto: CreateSpecialtyDto):Promise<Specialty> {
    return await this.specialtyRepository.create(dto);
  }

  async getAll():Promise<Specialty[]> {
    return await this.specialtyRepository.findAll();
  }
}
