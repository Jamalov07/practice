import { Module } from '@nestjs/common';
import { SubCategoriesController } from './subCategories.controller';
import { SubCategoriesService } from './subCategories.service';

@Module({
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
})
export class SubCategoriesModule {}
