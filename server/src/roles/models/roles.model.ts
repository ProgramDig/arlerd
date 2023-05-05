import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UsersLogin } from "../../users-login/models/users-login.model";

interface RolesAttrs {
  value: string;
}

@Table({ tableName: "roles" })
export class Roles extends Model<Roles, RolesAttrs> {
  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "Значення ролі" })
  @Column({ type: DataType.STRING, unique: true })
  value: string;

  @ForeignKey(() => UsersLogin)
  @Column({ type: DataType.INTEGER, allowNull: true })
  userId: number;

  @BelongsTo(() => UsersLogin)
  user: UsersLogin;
}