import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface Cat {
  category_id: number;
  category_name: string;
}

@Table({ tableName: 'subcategories' })
export class Categories extends Model<Categories, Cat> {
  @ApiProperty({ example: '1', description: 'SubCategories ning unikal idsi' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  category_id: number;

  @ApiProperty({ example: 'nouts', description: 'Categories nomi' })
  @Column({ type: DataType.STRING, allowNull: false })
  category_name: string;
}
