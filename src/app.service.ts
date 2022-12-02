import { BadRequestException, Injectable, Query, Request } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './pruducts/products.service';
import { SubCategoriesService } from './subCategories/subCategories.service';

@Injectable()
export class AppService {
  constructor(
    private readonly categoryService: CategoriesService,
    private readonly subCategoryService: SubCategoriesService,
    private readonly productService: ProductsService,
  ) {}

    async getByQuery(body) {
        let str = JSON.stringify(body).toLowerCase();
        str = JSON.parse(str);
        console.log(str);
    if (body.categoryId) {
      const subCategories = await this.subCategoryService.getByCategory(
        body.categoryId,
      );
      console.log(subCategories);
      let productsInThisCategory = [];
      subCategories.forEach((subcategory) => {
        productsInThisCategory.push(subcategory.products);
      });
      if (!productsInThisCategory) {
        throw new BadRequestException(
          'products not found or category is empty',
        );
      }
      return productsInThisCategory;
    }
    if (body.subCategoryId) {
      const products = await (
        await this.subCategoryService.getOne(body.subCategoryId)
      ).products;
      if (!products) {
        throw new BadRequestException(
          'products in this subcategory not found or table is empty',
        );
      }
      return products;
    }
    if (body.categoryId && body.subCategoryId) {
      const products = await this.subCategoryService.getByBody(
        body.categoryId,
        body.subCategoryId,
      );
      return products;
    }
    if (
      !body.categoryId &&
      (body.subcategoryId ||
        body.color ||
        body.model ||
        body.product_name ||
        body.price)
    ) {
      console.log('111');
      const products = await this.productService.getProducts(body);
      return products;
    }
  }
}
