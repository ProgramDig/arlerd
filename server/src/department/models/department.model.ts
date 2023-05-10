import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Specialty } from "../../specialty/models/specialty.model";

interface DepartmentCreateAttrs {
  name: string;
  idSpecialty: number;
  number: number;
}

@Table({ tableName: "department" })
export class Department extends Model<Department, DepartmentCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  number: number;

  @ForeignKey(() => Specialty)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idSpecialty: number;

  @BelongsTo(() => Specialty)
  specialty: Specialty;
}