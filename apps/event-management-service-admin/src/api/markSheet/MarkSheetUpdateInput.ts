import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MarkSheetUpdateInput = {
  course?: CourseWhereUniqueInput;
  marksObtained?: number;
  student?: StudentWhereUniqueInput;
  totalMarks?: number;
};
