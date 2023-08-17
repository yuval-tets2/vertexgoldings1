import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type UniversityWhereInput = {
  courses?: CourseListRelationFilter;
  department?: DepartmentListRelationFilter;
  employee?: EmployeeListRelationFilter;
  students?: StudentListRelationFilter;
};
