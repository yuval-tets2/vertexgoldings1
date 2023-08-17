import { Course } from "../course/Course";

export type AdmissionCriterion = {
  course?: Course;
  createdAt: Date;
  id: string;
  minimumMarks: number;
  updatedAt: Date;
};
