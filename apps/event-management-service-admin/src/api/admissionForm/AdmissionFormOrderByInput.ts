import { SortOrder } from "../../util/SortOrder";

export type AdmissionFormOrderByInput = {
  admissionBatchId?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  formSubmittedAt?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
