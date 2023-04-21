import { Inject, Injectable } from "@nestjs/common";
import { RANKS_REPOSITORY } from "../ranks.constant";
import { Ranks } from "../models/ranks.model";
import { RanksCreateDto } from "../dto/RanksCreate.dto";
import { RanksCreateManyDto } from "../dto/RanksCreateMany.dto";

@Injectable()
export class RanksService {
  constructor(@Inject(RANKS_REPOSITORY) private ranksRepository: typeof Ranks) {
  }

  async create(dto: RanksCreateDto): Promise<Ranks> {
    return await this.ranksRepository.create(dto);
  }

  async createMany(dto: RanksCreateManyDto):Promise<string> {
    for (const rank of dto.list) {
      await this.ranksRepository.create(rank)
    }
    return "OK"
  }

  async getAll():Promise<Ranks[]> {
    return await this.ranksRepository.findAll();
  }

  async getOne(value: string):Promise<Ranks> {
    return await this.ranksRepository.findOne({where:{value}});
  }
}
