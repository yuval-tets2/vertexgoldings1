import { AdmissionBatchListRelationFilter } from "../admissionBatch/AdmissionBatchListRelationFilter";
import { AdmissionCriterionListRelationFilter } from "../admissionCriterion/AdmissionCriterionListRelationFilter";
import { AdmissionFormListRelationFilter } from "../admissionForm/AdmissionFormListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { MarkSheetListRelationFilter } from "../markSheet/MarkSheetListRelationFilter";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type CourseWhereInput = {
  admissionBatches?: AdmissionBatchListRelationFilter;
  admissionCriteria?: AdmissionCriterionListRelationFilter;
  admissionForm?: AdmissionFormListRelationFilter;
  comment?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
  faculty?: FacultyWhereUniqueInput;
  markSheet?: MarkSheetListRelationFilter;
  university?: UniversityWhereUniqueInput;
};
