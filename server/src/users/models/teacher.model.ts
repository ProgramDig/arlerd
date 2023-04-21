import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TeacherCreationAttrs {
  firstName: string
  secondName: string
  thirdName: string
}
@Table({tableName: "teacher"})
export class Teacher extends Model<Teacher, TeacherCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string

  @Column({ type: DataType.STRING, allowNull: false })
  secondName: string

  @Column({ type: DataType.STRING, allowNull: false })
  thirdName: string

  @Column({ type: DataType.INTEGER})
  idRank: number

  @Column({ type: DataType.INTEGER})
  idDegree: number

  @Column({ type: DataType.INTEGER})
  idLoginDto: number
}