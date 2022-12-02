import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateProductsDto {
  @ApiProperty({ example: '1', description: 'sub categoriya idsi' })
  @IsOptional()
  @IsNumber()
  sub_category_id?: number;
  @ApiProperty({ example: 'redmi', description: 'model nomi' })
  @IsOptional()
  @IsString()
  model?: string;
  @ApiProperty({ example: 'redmi note 6 pro', description: 'product nomi' })
  @IsOptional()
  @IsString()
  product_name?: string;
  @ApiProperty({ example: 'black', description: 'product rangi' })
  @IsOptional()
  @IsString()
  color?: string;
  @ApiProperty({ example: '120000', description: 'product narxi' })
  @IsOptional()
  @IsNumber()
  price?: number;
}
