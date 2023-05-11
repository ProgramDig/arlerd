import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineTeacherYearService } from './discipline-teacher-year.service';

describe('DisciplineTeacherYearService', () => {
  let service: DisciplineTeacherYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplineTeacherYearService],
    }).compile();

    service = module.get<DisciplineTeacherYearService>(DisciplineTeacherYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
