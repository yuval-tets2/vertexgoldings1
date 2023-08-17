import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type FacultyWhereInput = {
  courses?: CourseListRelationFilter;
  department?: DepartmentWhereUniqueInput;
};
