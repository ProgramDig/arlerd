import { Column, DataType, Model, Table } from "sequelize-typescript";

interface YearCreateAttrs {
  value: string;
}

@Table({ tableName: "year" })
export class Year extends Model<Year, YearCreateAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  value: string;
}