import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubCategoriesDto } from './dto/create-subCategories.dto';
import { UpdateSubCategoriesDto } from './dto/update-subCategories.dto';
import { SubCategoriesService } from './subCategories.service';

@Controller('subcategories')
export class SubCategoriesController {
  constructor(private readonly subcategoriesService: SubCategoriesService) {}

  @Get()
  getAll() {
    return this.subcategoriesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.subcategoriesService.getOne(id);
  }

  @Post()
  create(@Body() subCategoriesBody: SubCategoriesDto) {
    return this.subcategoriesService.create(subCategoriesBody);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() subCategoriesBody: UpdateSubCategoriesDto,
  ) {
    return this.subcategoriesService.update(id, subCategoriesBody);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subcategoriesService.delete(id);
  }
}
