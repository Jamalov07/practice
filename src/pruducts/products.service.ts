import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductsDto } from './dto/create-products.dto';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products)
    private productRepository: typeof Products,
  ) {}

  async getAll() {
    const products = await this.productRepository.findAll({
      include: { all: true },
    });
    if (!products) {
      throw new BadRequestException('Products not found');
    }
    return products;
  }

  async getOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
    });
    if (!product) {
      throw new BadRequestException('product not found');
    }
    return product;
  }

  async create(productBody: ProductsDto) {
    const product = await this.productRepository.findOne({
      where: { ...productBody },
    });
    if (product) {
      throw new BadRequestException('product already exists');
    }
    const newproduct = await this.productRepository.create(productBody);
    if (!newproduct) {
      throw new BadRequestException('product not created');
    }
    return newproduct;
  }

  async update(id: number, productBody: ProductsDto) {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
    });
    if (!product) {
      throw new BadRequestException('product not found');
    }
    const updatedProduct = await this.productRepository.update(productBody, {
      where: { product_id: id },
      returning: true,
    });
    if (!updatedProduct) {
      throw new BadRequestException('product not updated');
    }
    return updatedProduct[1][0];
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
    });
    if (!product) {
      throw new BadRequestException('product not found');
    }
    await this.productRepository.destroy({
      where: { product_id: id },
    });
    return {
      message: 'product deleted',
      product: product.product_id,
    };
  }
}
