import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MarkSheetWhereInput = {
  course?: CourseWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
