import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MarkSheetCreateInput = {
  course: CourseWhereUniqueInput;
  marksObtained: number;
  student: StudentWhereUniqueInput;
  totalMarks: number;
};
