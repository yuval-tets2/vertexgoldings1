import { AdmissionFormListRelationFilter } from "../admissionForm/AdmissionFormListRelationFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";

export type AdmissionBatchWhereInput = {
  admissionForm?: AdmissionFormListRelationFilter;
  courses?: CourseListRelationFilter;
};
