import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TestAttrs {
  date: string;
  unit: string;
  countUPD: number;
}

@Table({ tableName: "test" })
export class Test extends Model<Test, TestAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true })
  date: string;

  @Column({ type: DataType.STRING, allowNull: true })
  unit: string;

  @Column({ type: DataType.STRING, allowNull: true })
  countUPD: number;
}