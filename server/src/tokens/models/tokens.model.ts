import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UsersLogin } from '../../users-login/models/users-login.model';

interface CreateTokensAttrs {
  userId: number;
  refreshToken: string;
}

@Table({ tableName: 'tokens' })
export class Tokens extends Model<Tokens, CreateTokensAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  refreshToken: string;

  @ForeignKey(() => UsersLogin)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => UsersLogin)
  user: UsersLogin;
}
