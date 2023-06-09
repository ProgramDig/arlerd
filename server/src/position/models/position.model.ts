import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Department } from "../../department/models/department.model";
import { Teacher } from "../../teacher/models/teacher.model";
import { TeacherPosition } from "../../teacher-position/model/teacher-position.model";

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

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isCommander: boolean;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idDepartment: number;


  @BelongsTo(() => Department)
  department: Department;

  @BelongsToMany(() => Teacher, ()=> TeacherPosition)
  teachers: Teacher[]
}