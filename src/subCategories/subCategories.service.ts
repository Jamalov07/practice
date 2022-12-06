import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubCategoriesDto } from '../subCategories/dto/create-subCategories.dto';
import { SubCategories } from '../subCategories/subCategories.model';
import { UpdateSubCategoriesDto } from './dto/update-subCategories.dto';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel(SubCategories)
    private subCategoryRepository: typeof SubCategories,
  ) {}

  async getAll() {
    const subCategories = await this.subCategoryRepository.findAll({
      include: { all: true },
    });
    if (!subCategories) {
      throw new BadRequestException('SubCategories not found');
    }
    return subCategories;
  }

  async getOne(id: number) {
    const subCategory = await this.subCategoryRepository.findOne({
      where: { sub_category_id: id },
      include: { all: true },
    });
    if (!subCategory) {
      throw new BadRequestException('subCategory not found');
    }
    return subCategory;
  }

  async create(subCategoryBody: SubCategoriesDto) {
    const subCategory = await this.subCategoryRepository.findOne({
      where: { sub_category_name: subCategoryBody.sub_category_name },
    });
    if (subCategory) {
      throw new BadRequestException('subCategory already exists');
    }
    const newSubCategory = await this.subCategoryRepository.create(
      subCategoryBody,
    );
    if (!newSubCategory) {
      throw new BadRequestException('subCategory not created');
    }
    return newSubCategory;
  }

  async update(id: number, subCategoryBody: UpdateSubCategoriesDto) {
    const subCategory = await this.subCategoryRepository.findOne({
      where: { sub_category_id: id },
    });
    if (!subCategory) {
      throw new BadRequestException('subCategory not found');
    }
    const updatedsubCategory = await this.subCategoryRepository.update(
      subCategoryBody,
      {
        where: { sub_category_id: id },
        returning: true,
      },
    );
    if (!updatedsubCategory) {
      throw new BadRequestException('subCategory not updated');
    }
    return updatedsubCategory[1][0];
  }

  async delete(id: number) {
    const subCategory = await this.subCategoryRepository.findOne({
      where: { sub_category_id: id },
    });
    if (!subCategory) {
      throw new BadRequestException('subCategory not found');
    }
    await this.subCategoryRepository.destroy({
      where: { sub_category_id: id },
    });
    return {
      message: 'subCategory deleted',
      subCategory: subCategory.sub_category_id,
    };
  }

  async getByCategory(id: number) {
    const subCategories = await this.subCategoryRepository.findAll({
      where: { category_id: id },
      include: { all: true },
    });
    if (!subCategories) {
      throw new BadRequestException('category not found or category is empty');
    }
    return subCategories;
  }

  async getByBody(categoryid: number, subcategoryid: number) {
    console.log('vergul');
    const subcategory = await this.subCategoryRepository.findOne({
      where: { category_id: categoryid, sub_category_id: subcategoryid },
      include: { all: true },
    });

    if (!subcategory) {
      throw new BadRequestException('subCategory not found or it is empty');
    }
    return subcategory.products;
  }
}
