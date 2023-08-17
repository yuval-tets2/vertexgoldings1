import { AdmissionBatch } from "../admissionBatch/AdmissionBatch";
import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type AdmissionForm = {
  admissionBatch?: AdmissionBatch;
  course?: Course;
  createdAt: Date;
  formSubmittedAt: Date;
  id: string;
  student?: Student;
  updatedAt: Date;
};
