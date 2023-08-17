import { AdmissionFormCreateNestedManyWithoutAdmissionBatchesInput } from "./AdmissionFormCreateNestedManyWithoutAdmissionBatchesInput";
import { CourseCreateNestedManyWithoutAdmissionBatchesInput } from "./CourseCreateNestedManyWithoutAdmissionBatchesInput";

export type AdmissionBatchCreateInput = {
  admissionForm?: AdmissionFormCreateNestedManyWithoutAdmissionBatchesInput;
  courses?: CourseCreateNestedManyWithoutAdmissionBatchesInput;
  endDate: Date;
  name: string;
  startDate: Date;
};
