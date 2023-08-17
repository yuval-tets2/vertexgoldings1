import { CourseCreateNestedManyWithoutFacultiesInput } from "./CourseCreateNestedManyWithoutFacultiesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type FacultyCreateInput = {
  courses?: CourseCreateNestedManyWithoutFacultiesInput;
  department: DepartmentWhereUniqueInput;
  name: string;
};
