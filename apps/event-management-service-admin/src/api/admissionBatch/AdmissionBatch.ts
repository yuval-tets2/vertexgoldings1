import { AdmissionForm } from "../admissionForm/AdmissionForm";
import { Course } from "../course/Course";

export type AdmissionBatch = {
  admissionForm?: Array<AdmissionForm>;
  courses?: Array<Course>;
  createdAt: Date;
  endDate: Date;
  id: string;
  name: string;
  startDate: Date;
  updatedAt: Date;
};
