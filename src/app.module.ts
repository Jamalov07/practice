import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './subCategories/subCategories.module';
import { ProductsModule } from './pruducts/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';

import { resolve } from 'path';
import { Categories } from './categories/categories.model';
import { SubCategories } from './subCategories/subCategories.model';
import { Products } from './pruducts/products.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    ServeStaticModule.forRoot({ rootPath: resolve(__dirname, 'static') }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Categories,SubCategories,Products],
      autoLoadModels: true,
      logging: false,
    }),
    CategoriesModule,
    SubCategoriesModule,
    ProductsModule,
  ],
})
export class AppModule {}
