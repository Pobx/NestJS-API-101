import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';

@Module({
  controllers: [FishController],
  imports: [CatsModule],
  providers: [CatsService],
})
export class FishModule {}
