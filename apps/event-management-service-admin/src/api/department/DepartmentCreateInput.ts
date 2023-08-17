import { CourseCreateNestedManyWithoutDepartmentsInput } from "./CourseCreateNestedManyWithoutDepartmentsInput";
import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";
import { FacultyCreateNestedManyWithoutDepartmentsInput } from "./FacultyCreateNestedManyWithoutDepartmentsInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type DepartmentCreateInput = {
  courses?: CourseCreateNestedManyWithoutDepartmentsInput;
  employee?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  faculty?: FacultyCreateNestedManyWithoutDepartmentsInput;
  name: string;
  university: UniversityWhereUniqueInput;
};
