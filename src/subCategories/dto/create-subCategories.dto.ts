import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SubCategories {
  @ApiProperty({ example: '33', description: 'category id' })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
  @ApiProperty({ example: 'laptops', description: 'this sub category name' })
  @IsNotEmpty()
  @IsString()
  sub_category_name: string;
}
