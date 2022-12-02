import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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
  update(@Param('id') id: number, @Body() productsBody: ProductsDto) {
    return this.productsService.update(id, productsBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
