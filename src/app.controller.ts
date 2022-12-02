import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Categories } from './categories/categories.model';
import { Products } from './pruducts/products.model';
import { SubCategories } from './subCategories/subCategories.model';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('products')
  getByQuery(@Query() body) {
      console.log(body)
    return this.appService.getByQuery(body);
  }
}
