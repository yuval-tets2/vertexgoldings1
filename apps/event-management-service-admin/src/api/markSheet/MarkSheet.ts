import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type MarkSheet = {
  course?: Course;
  createdAt: Date;
  id: string;
  marksObtained: number;
  student?: Student;
  totalMarks: number;
  updatedAt: Date;
};
