import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface RolesAttrs {
  value: string;
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles, RolesAttrs> {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Значення ролі' })
  @Column({ type: DataType.STRING, unique: true })
  value: string;
}
