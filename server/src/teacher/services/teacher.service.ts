import { Inject, Injectable } from "@nestjs/common";
import { TEACHER_REPOSITORY } from "../teacher.constant";
import { Teacher } from "../models/teacher.model";
import { CreateTeacherDto } from "../dto/CreateTeacherDto";
import { RanksService } from "../../ranks/services/ranks.service";
import { UsersLoginService } from "../../users-login/services/users-login.service";
import { DegreesService } from "../../degrees/services/degrees.service";

@Injectable()
export class TeacherService {
  constructor(@Inject(TEACHER_REPOSITORY) private teacherRepository: typeof Teacher,
              private ranksService: RanksService,
              private userLoginService: UsersLoginService,
              private degreesService: DegreesService) {
  }

  async create(dto: CreateTeacherDto): Promise<Teacher> {
    const teacher: Teacher = await this.teacherRepository.create(dto);

    teacher.rank = await this.ranksService.getOne(dto.idRank);
    teacher.degree = await this.degreesService.getOne(dto.idDegree);
    teacher.userLogin = await this.userLoginService.getOne(dto.idUserLogin);

    await teacher.save();
    return this.getByPk(teacher.id);
  }

  async getByPk(id: number): Promise<Teacher> {
    return await this.teacherRepository.findByPk(id, { include: { all: true } });
  }

  async getByUserLoginId(id: number): Promise<Teacher> {
    return await this.teacherRepository.findOne({
      where: {
        idUserLogin: id
      },
      include: {
        all: true
      }
    });
  }

  async getAll(): Promise<Teacher[]> {
    return await this.teacherRepository.findAll({ include: { all: true } });
  }
}
