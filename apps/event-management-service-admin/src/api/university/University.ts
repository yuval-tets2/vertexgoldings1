import { Course } from "../course/Course";
import { Department } from "../department/Department";
import { Employee } from "../employee/Employee";
import { Student } from "../student/Student";

export type University = {
  courses?: Array<Course>;
  createdAt: Date;
  department?: Array<Department>;
  description: string | null;
  employee?: Array<Employee>;
  established: number;
  id: string;
  location: string;
  name: string;
  students?: Array<Student>;
  updatedAt: Date;
};
