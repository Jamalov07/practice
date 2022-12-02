import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface Prod {
  category_id: number;
  sub_category_name: string;
}

@Table({ tableName: 'products' })
export class Products extends Model<Products, Prod> {
  @ApiProperty({ example: '1', description: 'Products ning unikal idsi' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  product_id: number;

  @ApiProperty({ example: '3', description: 'sub categories idsi' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  sub_category_id: number;

  @ApiProperty({ example: 'redmi', description: 'Products modeli' })
  @Column({ type: DataType.STRING, allowNull: false })
  model: string;

  @ApiProperty({ example: 'redmi note 8', description: 'Products nomi' })
  @Column({ type: DataType.STRING, allowNull: false })
  product_name: string;

  @ApiProperty({ example: 'red', description: 'Products rangi' })
  @Column({ type: DataType.STRING, allowNull: false })
  color: string;

  @ApiProperty({ example: '600000', description: 'Products narxi' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;
}
