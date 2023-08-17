import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  designation?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  universityId?: SortOrder;
  updatedAt?: SortOrder;
};
