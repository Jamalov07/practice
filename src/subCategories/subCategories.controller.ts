import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubCategoriesDto } from './dto/create-subCategories.dto';
import { UpdateSubCategoriesDto } from './dto/update-subCategories.dto';
import { SubCategories } from './subCategories.model';
import { SubCategoriesService } from './subCategories.service';

@Controller('subcategories')
export class SubCategoriesController {
  constructor(private readonly subcategoriesService: SubCategoriesService) {}

  @ApiOperation({ summary: 'barcha subcategorylarni olish' })
  @ApiResponse({ status: 200, type: [SubCategories] })
  @Get()
  getAll() {
    return this.subcategoriesService.getAll();
  }

  @ApiOperation({ summary: 'bitta subcategoryni olish' })
  @ApiResponse({ status: 200, type: SubCategories })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.subcategoriesService.getOne(id);
  }

  @ApiOperation({ summary: 'yangi subcategory qoshish' })
  @ApiResponse({ status: 200, type: SubCategories })
  @Post()
  create(@Body() subCategoriesBody: SubCategoriesDto) {
    return this.subcategoriesService.create(subCategoriesBody);
  }

  @ApiOperation({ summary: 'subcategoryni ozgartirish' })
  @ApiResponse({ status: 200, type: SubCategories })
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() subCategoriesBody: UpdateSubCategoriesDto,
  ) {
    return this.subcategoriesService.update(id, subCategoriesBody);
  }

  @ApiOperation({ summary: 'subcategoryni ochirish' })
  @ApiResponse({ status: 200, type: SubCategories })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subcategoriesService.delete(id);
  }
}
