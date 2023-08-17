import { SortOrder } from "../../util/SortOrder";

export type MarkSheetOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  marksObtained?: SortOrder;
  studentId?: SortOrder;
  totalMarks?: SortOrder;
  updatedAt?: SortOrder;
};
