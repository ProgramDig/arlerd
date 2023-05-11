import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Department } from "../../department/models/department.model";

interface DisciplineCreateAttrs {
  codeEducationalComponent: string;
  nameEducationalComponent: string;
  idDepartment: number;
  creditsECTS: number;
  totalHours: number;
  semesterHours: number;
  semesterClassroomHours: number;
  semesterLecturesHours: number;
  semesterGroupSeminarHours: number;
  semesterPractiseHours: number;
  semesterIndependentHors: number;
  semesterCourseWorkCount: number;
  semesterModuleWorkCount: number;
  semesterRGRWorkCount: number;
  semesterAbstractCount: number;
  isSemesterExamControl: boolean;
  isSemesterTestControl: boolean;
  semesterCount: number;
}

@Table({ tableName: "discipline" })
export class Discipline extends Model<Discipline, DisciplineCreateAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  codeEducationalComponent: string;

  @Column({ type: DataType.STRING, allowNull: true })
  nameEducationalComponent: string;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER })
  idDepartment: number;

  @BelongsTo(() => Department)
  department: Department;

  @Column({ type: DataType.DOUBLE, defaultValue: 0 })
  creditsECTS: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  totalHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterClassroomHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterLecturesHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterGroupSeminarHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterPractiseHours: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterIndependentHors: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterCourseWorkCount: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterModuleWorkCount: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterRGRWorkCount: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterAbstractCount: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isSemesterExamControl: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isSemesterTestControl: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  semesterCount: number;
}