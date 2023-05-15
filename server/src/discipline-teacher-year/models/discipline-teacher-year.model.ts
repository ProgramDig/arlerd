import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teacher } from "../../teacher/models/teacher.model";
import { Discipline } from "../../discipline/models/discipline.model";
import { Year } from "../../year/models/year.model";

interface DisciplineTeacherYearCreateAttrs {
  idTeacher: number;
  idDiscipline: number;
  idYear: number;
}

@Table({ tableName: "discipline-teacher-year" })
export class DisciplineTeacherYear extends Model<DisciplineTeacherYear, DisciplineTeacherYearCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idTeacher: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @ForeignKey(() => Discipline)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idDiscipline: number;

  @BelongsTo(() => Discipline)
  discipline: Discipline;

  @ForeignKey(() => Year)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idYear: number;

  @BelongsTo(() => Year)
  year: Year;
}