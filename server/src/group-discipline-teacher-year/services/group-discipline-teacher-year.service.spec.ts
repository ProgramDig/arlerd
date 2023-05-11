import { Test, TestingModule } from '@nestjs/testing';
import { GroupDisciplineTeacherYearService } from './group-discipline-teacher-year.service';

describe('GroupDisciplineTeacherYearService', () => {
  let service: GroupDisciplineTeacherYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupDisciplineTeacherYearService],
    }).compile();

    service = module.get<GroupDisciplineTeacherYearService>(GroupDisciplineTeacherYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
