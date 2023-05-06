import { Module } from '@nestjs/common';
import { DegreesController } from './controllers/degrees.controller';
import { DegreesService } from './services/degrees.service';
import { degreesProviders } from './providers/degrees.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [DegreesController],
  providers: [DegreesService, ...degreesProviders],
  imports: [DatabaseModule],
  exports: [...degreesProviders],
})
export class DegreesModule {}
