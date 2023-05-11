import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "../../group/models/group.model";
import { DisciplineTeacherYear } from "../../discipline-teacher-year/models/discipline-teacher-year.model";

interface GroupDisciplineTeacherYearCreateAttrs {
  idGroup: number
  idDisciplineTeacherYear: number
}
@Table({tableName:"group-discipline-teacher-year"})
export class GroupDisciplineTeacherYear extends Model<GroupDisciplineTeacherYear, GroupDisciplineTeacherYearCreateAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  idGroup: number

  @BelongsTo(() => Group)
  group: Group

  @ForeignKey(() => DisciplineTeacherYear)
  @Column({ type: DataType.INTEGER })
  idDisciplineTeacherYear: number

  @BelongsTo(() => DisciplineTeacherYear)
  disciplineTeacherYear: DisciplineTeacherYear
}