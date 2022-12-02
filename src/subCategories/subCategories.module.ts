import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategoriesController } from './subCategories.controller';
import { SubCategories } from './subCategories.model';
import { SubCategoriesService } from './subCategories.service';

@Module({
  imports: [SequelizeModule.forFeature([SubCategories])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
