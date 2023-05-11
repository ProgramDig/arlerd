import { Test, TestingModule } from '@nestjs/testing';
import { TeacherPositionService } from './teacher-position.service';

describe('TeacherPositionService', () => {
  let service: TeacherPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherPositionService],
    }).compile();

    service = module.get<TeacherPositionService>(TeacherPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
