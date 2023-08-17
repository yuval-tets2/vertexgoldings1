import { Course } from "../course/Course";
import { Department } from "../department/Department";

export type Faculty = {
  courses?: Array<Course>;
  createdAt: Date;
  department?: Department;
  id: string;
  name: string;
  updatedAt: Date;
};
