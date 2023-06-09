import { Test, TestingModule } from '@nestjs/testing';
import { UsersLoginController } from './users-login.controller';

describe('UsersController', () => {
  let controller: UsersLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersLoginController],
    }).compile();

    controller = module.get<UsersLoginController>(UsersLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
