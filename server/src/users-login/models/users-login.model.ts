import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  login: string
  email: string
  password: string
}
@Table({ tableName: "users-login-login" })
export class UsersLogin extends Model<UsersLogin, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  login: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  activatedLink: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActivated: boolean;

  @Column({ type: DataType.INTEGER, allowNull: true })
  idRole: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  idTokens: number;
}