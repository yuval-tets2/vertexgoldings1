import { CourseUpdateManyWithoutUniversitiesInput } from "./CourseUpdateManyWithoutUniversitiesInput";
import { DepartmentUpdateManyWithoutUniversitiesInput } from "./DepartmentUpdateManyWithoutUniversitiesInput";
import { EmployeeUpdateManyWithoutUniversitiesInput } from "./EmployeeUpdateManyWithoutUniversitiesInput";
import { StudentUpdateManyWithoutUniversitiesInput } from "./StudentUpdateManyWithoutUniversitiesInput";

export type UniversityUpdateInput = {
  courses?: CourseUpdateManyWithoutUniversitiesInput;
  department?: DepartmentUpdateManyWithoutUniversitiesInput;
  description?: string | null;
  employee?: EmployeeUpdateManyWithoutUniversitiesInput;
  established?: number;
  location?: string;
  name?: string;
  students?: StudentUpdateManyWithoutUniversitiesInput;
};
