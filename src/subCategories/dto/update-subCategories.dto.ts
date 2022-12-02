import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateSubCategoriesDto {
  @ApiProperty({ example: '33', description: 'category id' })
  @IsOptional()
  @IsNumber()
  category_id?: number;
  @ApiProperty({ example: 'laptops', description: 'this sub category name' })
  @IsOptional()
  @IsString()
  sub_category_name?: string;
}
