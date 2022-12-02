import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { CategoriesDto } from './dto/create-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories) private categoryRepository: typeof Categories,
  ) {}

  async getAll() {
    const categories = await this.categoryRepository.findAll({
      include: { all: true },
    });
    if (!categories) {
      throw new BadRequestException('Categories not found');
    }
    return categories;
  }

  async getOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { category_id: id },
    });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }

  async create(categoryBody: CategoriesDto) {
    const category = await this.categoryRepository.findOne({
      where: { category_name: categoryBody.category_name },
    });
    if (category) {
      throw new BadRequestException('Category already exists');
    }
    const newCategory = await this.categoryRepository.create(categoryBody);
    if (!newCategory) {
      throw new BadRequestException('Category not created');
    }
    return newCategory;
  }

  async update(id: number, categoryBody: CategoriesDto) {
    const category = await this.categoryRepository.findOne({
      where: { category_id: id },
    });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    const updatedCategory = await this.categoryRepository.update(categoryBody, {
      where: { category_id: id },
      returning: true,
    });
    if (!updatedCategory) {
      throw new BadRequestException('Category not updated');
    }
    return updatedCategory[1][0];
  }

  async delete(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { category_id: id },
    });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    await this.categoryRepository.destroy({ where: { category_id: id } });
    return { message: 'category deleted', category: category.category_id };
  }
}
