import { Department } from "../department/Department";
import { University } from "../university/University";

export type Employee = {
  createdAt: Date;
  department?: Department;
  designation: string;
  firstName: string;
  id: string;
  lastName: string;
  university?: University;
  updatedAt: Date;
};
