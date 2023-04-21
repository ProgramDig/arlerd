import { Column, DataType, Model, Table } from "sequelize-typescript";
@Table({tableName:"roles"})
export class Roles extends Model<Roles> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({type: DataType.STRING, unique: true})
  value: string
}