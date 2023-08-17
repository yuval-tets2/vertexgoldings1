import { Course } from "../course/Course";
import { Employee } from "../employee/Employee";
import { Faculty } from "../faculty/Faculty";
import { University } from "../university/University";

export type Department = {
  courses?: Array<Course>;
  createdAt: Date;
  employee?: Array<Employee>;
  faculty?: Array<Faculty>;
  id: string;
  name: string;
  university?: University;
  updatedAt: Date;
};
