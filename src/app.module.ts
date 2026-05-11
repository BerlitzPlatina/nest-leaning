import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CoreModule, CatsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}