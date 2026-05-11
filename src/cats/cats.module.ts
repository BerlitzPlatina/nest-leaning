import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AnimalsService } from './animals.service';

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: AnimalsService,
      useClass: CatsService,
    },
],
})
export class CatsModule {}
