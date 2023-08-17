import { CourseCreateNestedManyWithoutUniversitiesInput } from "./CourseCreateNestedManyWithoutUniversitiesInput";
import { DepartmentCreateNestedManyWithoutUniversitiesInput } from "./DepartmentCreateNestedManyWithoutUniversitiesInput";
import { EmployeeCreateNestedManyWithoutUniversitiesInput } from "./EmployeeCreateNestedManyWithoutUniversitiesInput";
import { StudentCreateNestedManyWithoutUniversitiesInput } from "./StudentCreateNestedManyWithoutUniversitiesInput";

export type UniversityCreateInput = {
  courses?: CourseCreateNestedManyWithoutUniversitiesInput;
  department?: DepartmentCreateNestedManyWithoutUniversitiesInput;
  description?: string | null;
  employee?: EmployeeCreateNestedManyWithoutUniversitiesInput;
  established: number;
  location: string;
  name: string;
  students?: StudentCreateNestedManyWithoutUniversitiesInput;
};
