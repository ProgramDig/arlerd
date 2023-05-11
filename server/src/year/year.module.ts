import { Module } from '@nestjs/common';
import { YearController } from './controllers/year.controller';
import { YearService } from './services/year.service';
import { DatabaseModule } from "../database/database.module";
import { yearProviders } from "./providers/year.providers";

@Module({
  controllers: [YearController],
  providers: [YearService, ...yearProviders],
  exports: [...yearProviders],
  imports: [DatabaseModule]
})
export class YearModule {}
