import { CourseUpdateManyWithoutDepartmentsInput } from "./CourseUpdateManyWithoutDepartmentsInput";
import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";
import { FacultyUpdateManyWithoutDepartmentsInput } from "./FacultyUpdateManyWithoutDepartmentsInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type DepartmentUpdateInput = {
  courses?: CourseUpdateManyWithoutDepartmentsInput;
  employee?: EmployeeUpdateManyWithoutDepartmentsInput;
  faculty?: FacultyUpdateManyWithoutDepartmentsInput;
  name?: string;
  university?: UniversityWhereUniqueInput;
};
