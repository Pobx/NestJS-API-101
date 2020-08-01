import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';

@Module({
  controllers: [FishController],
})
export class FishModule {}
