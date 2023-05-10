import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "../../teacher/models/teacher.model";

interface RankAttrs {
  value: string;
}

@Table({ tableName: "ranks" })
export class Ranks extends Model<Ranks, RankAttrs> {

  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Молодший сержант", description: "Значення звання" })
  @Column({ type: DataType.STRING, unique: true })
  value: string;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER, allowNull: true })
  teacherId: number;

  @BelongsTo(() => Teacher)
  user: Teacher;
}