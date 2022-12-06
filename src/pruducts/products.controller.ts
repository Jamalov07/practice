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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-product.dto';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'barcha productlarni olish' })
  @ApiResponse({ status: 200, type: [Products] })
  @Get('all')
  getAll() {
    return this.productsService.getAll();
  }

  @ApiOperation({ summary: 'bitta productni olish' })
  @ApiResponse({ status: 200, type: Products })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productsService.getOne(id);
  }

  @ApiOperation({ summary: 'yangi product qoshish' })
  @ApiResponse({ status: 200, type: Products })
  @Post()
  create(@Body() productsBody: ProductsDto) {
    return this.productsService.create(productsBody);
  }

  @ApiOperation({ summary: 'productni ozgartirish' })
  @ApiResponse({ status: 200, type: Products })
  @Put(':id')
  update(@Param('id') id: number, @Body() productsBody: UpdateProductsDto) {
    return this.productsService.update(id, productsBody);
  }

  @ApiOperation({ summary: 'product ochirish' })
  @ApiResponse({ status: 200, type: Products })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
