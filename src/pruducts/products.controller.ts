import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    console.log(version);
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productsService.getOne(id);
  }

  @Post()
  create(@Body() productsBody: ProductsDto) {
    return this.productsService.create(productsBody);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() productsBody: UpdateProductsDto) {
    return this.productsService.update(id, productsBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
