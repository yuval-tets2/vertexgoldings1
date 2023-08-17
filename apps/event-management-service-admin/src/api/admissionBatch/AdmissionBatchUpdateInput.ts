import { AdmissionFormUpdateManyWithoutAdmissionBatchesInput } from "./AdmissionFormUpdateManyWithoutAdmissionBatchesInput";
import { CourseUpdateManyWithoutAdmissionBatchesInput } from "./CourseUpdateManyWithoutAdmissionBatchesInput";

export type AdmissionBatchUpdateInput = {
  admissionForm?: AdmissionFormUpdateManyWithoutAdmissionBatchesInput;
  courses?: CourseUpdateManyWithoutAdmissionBatchesInput;
  endDate?: Date;
  name?: string;
  startDate?: Date;
};
