import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Department } from "../../department/models/department.model";

interface PositionCreateAttrs {
  value: string;
  idDepartment: number;
}

@Table({ tableName: "position" })
export class Position extends Model<Position, PositionCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  value: string;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idDepartment: number;

  @BelongsTo(() => Department)
  department: Department;
}