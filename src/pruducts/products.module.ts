import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [SequelizeModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
