import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Roles } from "../../roles/models/roles.model";

interface UserCreationAttrs {
  login: string;
  email: string;
  password: string;
}

@Table({ tableName: "users-login" })
export class UsersLogin extends Model<UsersLogin, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  login: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  activatedLink: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActivated: boolean;

  @ForeignKey(() => Roles)
  @Column({ type: DataType.INTEGER, allowNull: true, unique: true })
  idRole: number;

  @BelongsTo(() => Roles)
  role: Roles;

  @Column({ type: DataType.INTEGER, allowNull: true })
  idTokens: number;
}