import { BadRequestException, Injectable, Query } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './pruducts/products.service';
import { SubCategoriesService } from './subCategories/subCategories.service';

interface IBody {
  categoryid?: number;
  categoryname?: string;
  subcategoryid?: number;
  subcategoryname?: number;
  productid?: number;
  model?: string;
  color?: string;
  price?: number;
  productname?: string;
}

@Injectable()
export class AppService {
  constructor(
    private readonly categoryService: CategoriesService,
    private readonly subCategoryService: SubCategoriesService,
    private readonly productService: ProductsService,
  ) {}

  async getByQuery(body) {
    let str: IBody = JSON.parse(JSON.stringify(body).toLowerCase());
    const {
      categoryid,
      subcategoryid,
      categoryname,
      subcategoryname,
      productid,
      productname,
      model,
      price,
      color,
    } = str;
    console.log(str);
    if (categoryid && subcategoryid) {
      const products = await await this.subCategoryService.getByBody(
        categoryid,
        subcategoryid,
      );
      console.log(products, 'aaa');
      if (!products) {
        throw new BadRequestException('Products in this category not found');
      }
      return products;
    } else if (categoryid) {
      const subCategories = await this.subCategoryService.getByCategory(
        categoryid,
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
    } else if (subcategoryid) {
      const products = await (
        await this.subCategoryService.getOne(subcategoryid)
      ).products;
      if (!products) {
        throw new BadRequestException(
          'products in this subcategory not found or table is empty',
        );
      }
      return products;
    } else if (
      !body.categoryId &&
      (body.subcategoryId ||
        body.color ||
        body.model ||
        body.product_name ||
        body.price)
    ) {
      const products = await this.productService.getProducts(body);
      return products;
    }
  }
}
