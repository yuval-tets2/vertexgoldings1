import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  credits?: SortOrder;
  departmentId?: SortOrder;
  description?: SortOrder;
  facultyId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  universityId?: SortOrder;
  updatedAt?: SortOrder;
};
