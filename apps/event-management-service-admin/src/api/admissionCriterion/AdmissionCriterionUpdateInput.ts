import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AdmissionCriterionUpdateInput = {
  course?: CourseWhereUniqueInput;
  minimumMarks?: number;
};
