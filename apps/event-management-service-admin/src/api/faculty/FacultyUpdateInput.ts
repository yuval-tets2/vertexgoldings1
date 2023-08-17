import { CourseUpdateManyWithoutFacultiesInput } from "./CourseUpdateManyWithoutFacultiesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type FacultyUpdateInput = {
  courses?: CourseUpdateManyWithoutFacultiesInput;
  department?: DepartmentWhereUniqueInput;
  name?: string;
};
