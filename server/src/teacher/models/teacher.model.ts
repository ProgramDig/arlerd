import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Ranks } from "../../ranks/models/ranks.model";
import { Degrees } from "../../degrees/models/degrees.model";
import { UsersLogin } from "../../users-login/models/users-login.model";

interface TeacherCreationAttrs {
  firstName: string
  secondName: string
  thirdName: string
  dateOfBirth?: Date
  phoneNumber?: string
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

  @Column({ type: DataType.DATE, allowNull: true })
  dateOfBirth: Date

  @Column({ type: DataType.STRING, allowNull: true })
  phoneNumber: string

  @Column({ type: DataType.INTEGER})
  idRank: number

  @HasOne(() => Ranks)
  rank: Ranks

  @Column({ type: DataType.INTEGER})
  idDegree: number

  @HasOne(() => Degrees)
  degree: Degrees

  @Column({ type: DataType.INTEGER})
  idUserLogin: number

  @HasOne(() => UsersLogin)
  userLogin: UsersLogin
}