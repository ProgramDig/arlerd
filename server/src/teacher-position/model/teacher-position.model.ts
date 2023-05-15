import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teacher } from "../../teacher/models/teacher.model";
import { Position } from "../../position/models/position.model";
import { Year } from "../../year/models/year.model";

interface TeacherPositionCreateAttrs {
  idTeacher: number;
  idPosition: number;
  idYear: number;
}

@Table({ tableName: "teacher-position" })
export class TeacherPosition extends Model<TeacherPosition, TeacherPositionCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER })
  idTeacher: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @ForeignKey(() => Position)
  @Column({ type: DataType.INTEGER })
  idPosition: number;

  @BelongsTo(() => Position)
  position: Position;

  @ForeignKey(() => Year)
  @Column({ type: DataType.INTEGER })
  idYear: number;

  @BelongsTo(() => Year)
  year: Year;
}