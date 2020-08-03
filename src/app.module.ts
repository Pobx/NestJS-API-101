import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { DogsModule } from './dogs/dogs.module';
import { FishModule } from './fish/fish.module';
import { CatsController } from './cats/cats.controller';
import { FishController } from './fish/fish.controller';
import { DogsController } from './dogs/dogs.controller';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatsModule,
    CatsModule,
    DogsModule,
    FishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController, FishController, DogsController);
  }
}
