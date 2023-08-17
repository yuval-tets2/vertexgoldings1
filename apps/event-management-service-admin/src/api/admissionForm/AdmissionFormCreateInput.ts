import { AdmissionBatchWhereUniqueInput } from "../admissionBatch/AdmissionBatchWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AdmissionFormCreateInput = {
  admissionBatch: AdmissionBatchWhereUniqueInput;
  course: CourseWhereUniqueInput;
  student: StudentWhereUniqueInput;
};
