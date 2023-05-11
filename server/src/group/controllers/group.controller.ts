import { Body, Controller, Get, Post } from "@nestjs/common";
import { GroupService } from "../services/group.service";
import { GroupCreateDto } from "../dto/GroupCreate.dto";
import { Group } from "../models/group.model";

@Controller("group")
export class GroupController {
  constructor(private groupService: GroupService) {
  }

  @Post("/create")
  create(@Body() dto: GroupCreateDto): Promise<Group> {
    return this.groupService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Group[]> {
    return this.groupService.getAll();
  }
}
