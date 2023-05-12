import { Inject, Injectable } from "@nestjs/common";
import { GROUP_REPOSITORY } from "../group.constant";
import { Group } from "../models/group.model";
import { GroupCreateDto } from "../dto/GroupCreate.dto";

@Injectable()
export class GroupService {

  constructor(@Inject(GROUP_REPOSITORY) private groupRepository: typeof Group) {
  }

  async create(dto: GroupCreateDto): Promise<Group> {
    return await this.groupRepository.create(dto);
  }

  async getAll(): Promise<Group[]> {
    return await this.groupRepository.findAll({ include: { all: true } });
  }

  async getOneByPk(id: number): Promise<Group> {
    return await this.groupRepository.findByPk(id, { include: { all: true } });
  }

  async getManyByPk(ids: number[]): Promise<Group[]> {
    const data = [];
    for (const id of ids) {
      data.push(await this.groupRepository.findByPk(id, { include: { all: true } }));
    }
    return data;
  }
}
