import { AdmissionBatchCreateNestedManyWithoutCoursesInput } from "./AdmissionBatchCreateNestedManyWithoutCoursesInput";
import { AdmissionCriterionCreateNestedManyWithoutCoursesInput } from "./AdmissionCriterionCreateNestedManyWithoutCoursesInput";
import { AdmissionFormCreateNestedManyWithoutCoursesInput } from "./AdmissionFormCreateNestedManyWithoutCoursesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { MarkSheetCreateNestedManyWithoutCoursesInput } from "./MarkSheetCreateNestedManyWithoutCoursesInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type CourseCreateInput = {
  admissionBatches?: AdmissionBatchCreateNestedManyWithoutCoursesInput;
  admissionCriteria?: AdmissionCriterionCreateNestedManyWithoutCoursesInput;
  admissionForm?: AdmissionFormCreateNestedManyWithoutCoursesInput;
  comment?: string | null;
  credits: number;
  department: DepartmentWhereUniqueInput;
  description?: string | null;
  faculty?: FacultyWhereUniqueInput | null;
  markSheet?: MarkSheetCreateNestedManyWithoutCoursesInput;
  name: string;
  university: UniversityWhereUniqueInput;
};
