import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput;
  designation?: string;
  firstName?: string;
  lastName?: string;
  university?: UniversityWhereUniqueInput;
};
