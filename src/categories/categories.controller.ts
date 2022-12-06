import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Categories } from './categories.model';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/create-categories.dto';
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'barcha categorylarni olish' })
  @ApiResponse({ status: 200, type: [Categories] })
  @Get()
  getAll() {
    return this.categoriesService.getAll();
  }

  @ApiOperation({ summary: 'bitta categoryni olish' })
  @ApiResponse({ status: 200, type: Categories })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.categoriesService.getOne(id);
  }
  @ApiOperation({ summary: 'yangi category qoshish' })
  @ApiResponse({ status: 200, type: Categories })
  @Post()
  create(@Body() categoriesBody: CategoriesDto) {
    return this.categoriesService.create(categoriesBody);
  }

  @ApiOperation({ summary: 'categoryni ozgartirish' })
  @ApiResponse({ status: 200, type: Categories })
  @Put(':id')
  update(@Param('id') id: number, @Body() categoriesBody: CategoriesDto) {
    return this.categoriesService.update(id, categoriesBody);
  }

  @ApiOperation({ summary: 'categoryni ochirish' })
  @ApiResponse({ status: 200, type: Categories })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
