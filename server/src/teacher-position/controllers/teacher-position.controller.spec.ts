import { Test, TestingModule } from '@nestjs/testing';
import { TeacherPositionController } from './teacher-position.controller';

describe('TeacherPositionController', () => {
  let controller: TeacherPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherPositionController],
    }).compile();

    controller = module.get<TeacherPositionController>(TeacherPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
