import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { FacultyListRelationFilter } from "../faculty/FacultyListRelationFilter";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type DepartmentWhereInput = {
  courses?: CourseListRelationFilter;
  employee?: EmployeeListRelationFilter;
  faculty?: FacultyListRelationFilter;
  university?: UniversityWhereUniqueInput;
};
