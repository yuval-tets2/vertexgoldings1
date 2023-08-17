import { AdmissionFormListRelationFilter } from "../admissionForm/AdmissionFormListRelationFilter";
import { MarkSheetListRelationFilter } from "../markSheet/MarkSheetListRelationFilter";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type StudentWhereInput = {
  admissionForm?: AdmissionFormListRelationFilter;
  markSheet?: MarkSheetListRelationFilter;
  university?: UniversityWhereUniqueInput;
};
