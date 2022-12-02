import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/create-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll() {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.categoriesService.getOne(id);
  }

  @Post()
  create(@Body() categoriesBody: CategoriesDto) {
    return this.categoriesService.create(categoriesBody);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() categoriesBody: CategoriesDto) {
    return this.categoriesService.update(id, categoriesBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
