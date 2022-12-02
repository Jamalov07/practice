import { Module } from '@nestjs/common';
import { PruductsController } from './pruducts.controller';
import { PruductsService } from './pruducts.service';

@Module({
  controllers: [PruductsController],
  providers: [PruductsService]
})
export class PruductsModule {}
