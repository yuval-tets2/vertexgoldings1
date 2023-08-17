import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  university?: UniversityWhereUniqueInput;
};
