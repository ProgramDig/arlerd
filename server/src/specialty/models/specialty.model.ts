import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SpecialtyCreationAttrs {
  name: string,
  code: number
}

@Table({tableName: "specialty"})
export class Specialty extends Model<Specialty, SpecialtyCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  name: string

  @Column({ type: DataType.INTEGER, allowNull: true })
  code: number
}