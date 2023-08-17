import { AdmissionBatchUpdateManyWithoutCoursesInput } from "./AdmissionBatchUpdateManyWithoutCoursesInput";
import { AdmissionCriterionUpdateManyWithoutCoursesInput } from "./AdmissionCriterionUpdateManyWithoutCoursesInput";
import { AdmissionFormUpdateManyWithoutCoursesInput } from "./AdmissionFormUpdateManyWithoutCoursesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { MarkSheetUpdateManyWithoutCoursesInput } from "./MarkSheetUpdateManyWithoutCoursesInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type CourseUpdateInput = {
  admissionBatches?: AdmissionBatchUpdateManyWithoutCoursesInput;
  admissionCriteria?: AdmissionCriterionUpdateManyWithoutCoursesInput;
  admissionForm?: AdmissionFormUpdateManyWithoutCoursesInput;
  credits?: number;
  department?: DepartmentWhereUniqueInput;
  description?: string | null;
  faculty?: FacultyWhereUniqueInput | null;
  markSheet?: MarkSheetUpdateManyWithoutCoursesInput;
  name?: string;
  university?: UniversityWhereUniqueInput;
};
