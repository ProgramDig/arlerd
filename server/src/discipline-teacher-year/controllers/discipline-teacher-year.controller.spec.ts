import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineTeacherYearController } from './discipline-teacher-year.controller';

describe('DisciplineTeacherYearController', () => {
  let controller: DisciplineTeacherYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplineTeacherYearController],
    }).compile();

    controller = module.get<DisciplineTeacherYearController>(DisciplineTeacherYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
