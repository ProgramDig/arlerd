import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Ranks } from "../../ranks/models/ranks.model";
import { Degrees } from "../../degrees/models/degrees.model";
import { UsersLogin } from "../../users-login/models/users-login.model";
import { Position } from "../../position/models/position.model";
import { TeacherPosition } from "../../teacher-position/model/teacher-position.model";

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

  @ForeignKey(() => Ranks)
  @Column({ type: DataType.INTEGER})
  idRank: number

  @BelongsTo(() => Ranks)
  rank: Ranks

  @ForeignKey(() => Degrees)
  @Column({ type: DataType.INTEGER})
  idDegree: number

  @BelongsTo(() => Degrees)
  degree: Degrees

  @ForeignKey(() => UsersLogin)
  @Column({ type: DataType.INTEGER})
  idUserLogin: number

  @BelongsTo(() => UsersLogin)
  userLogin: UsersLogin

  @BelongsToMany(() => Position, () => TeacherPosition)
  positions: Position[]
}