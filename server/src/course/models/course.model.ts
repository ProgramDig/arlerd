import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CourseCreateAttrs {
  name: string
  yearRecruit: string
  faculty: number
}
@Table({tableName:"course"})
export class Course extends Model<Course, CourseCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, allowNull: true })
  name: string

  @Column({ type: DataType.STRING, allowNull: true })
  yearRecruit: string

  @Column({ type: DataType.INTEGER, allowNull: true })
  faculty: number
}