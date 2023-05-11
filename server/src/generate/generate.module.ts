import { Module } from '@nestjs/common';
import { GenerateService } from './services/generate.service';
import { GenerateController } from './cotrollers/generate.controller';

@Module({
  providers: [GenerateService],
  controllers: [GenerateController]
})
export class GenerateModule {}
