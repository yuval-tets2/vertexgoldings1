import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AdmissionCriterionCreateInput = {
  course: CourseWhereUniqueInput;
  minimumMarks: number;
};
