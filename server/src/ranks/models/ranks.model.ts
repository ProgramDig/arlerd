import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

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
}