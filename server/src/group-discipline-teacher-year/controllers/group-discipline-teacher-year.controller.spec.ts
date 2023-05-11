import { Test, TestingModule } from '@nestjs/testing';
import { GroupDisciplineTeacherYearController } from './group-discipline-teacher-year.controller';

describe('GroupDisciplineTeacherYearController', () => {
  let controller: GroupDisciplineTeacherYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupDisciplineTeacherYearController],
    }).compile();

    controller = module.get<GroupDisciplineTeacherYearController>(GroupDisciplineTeacherYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
