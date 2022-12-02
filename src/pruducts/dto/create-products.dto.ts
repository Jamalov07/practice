import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Products {
  @ApiProperty({ example: '1', description: 'sub categoriya idsi' })
  @IsNotEmpty()
  @IsNumber()
  sub_category_id: number;
  @ApiProperty({ example: 'redmi', description: 'model nomi' })
  @IsNotEmpty()
  @IsString()
  model: string;
  @ApiProperty({ example: 'redmi note 6 pro', description: 'product nomi' })
  @IsNotEmpty()
  @IsString()
  product_name: string;
  @ApiProperty({ example: 'black', description: 'product rangi' })
  @IsNotEmpty()
  @IsString()
  color: string;
  @ApiProperty({ example: '120000', description: 'product narxi' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
