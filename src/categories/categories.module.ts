import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesController } from './categories.controller';
import { Categories } from './categories.model';
import { CategoriesService } from './categories.service';

@Module({
  imports: [SequelizeModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
