import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface subC {
  category_id: number;
  sub_category_name: string;
}

@Table({ tableName: 'subcategories' })
export class SubCategories extends Model<SubCategories, subC> {
  @ApiProperty({ example: '1', description: 'SubCategories ning unikal idsi' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  sub_category_id: number;

  @ApiProperty({ example: '3', description: 'katta categories idsi' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  category_id: number;

  @ApiProperty({ example: 'nouts', description: 'SubCategories nomi' })
  @Column({ type: DataType.STRING, allowNull: false })
  sub_category_name: string;
}
