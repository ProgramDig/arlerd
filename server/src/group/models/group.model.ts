import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Specialty } from "../../specialty/models/specialty.model";
import { Course } from "../../course/models/course.model";

interface GroupCreateAttrs {
  name: string;
  cadetCount: number;
  idSpecialty: number;
  idCourse: number;
}

@Table({ tableName: "group" })
export class Group extends Model<Group, GroupCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  cadetCount: number;

  @ForeignKey(() => Specialty)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idSpecialty: number;

  @BelongsTo(() => Specialty)
  specialty: Specialty;

  @ForeignKey(() => Course)
  @Column({ type: DataType.INTEGER, allowNull: true })
  idCourse: number;

  @BelongsTo(() => Course)
  course: Course;
}