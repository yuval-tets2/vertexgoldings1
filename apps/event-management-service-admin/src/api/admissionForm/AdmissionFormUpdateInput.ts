import { AdmissionBatchWhereUniqueInput } from "../admissionBatch/AdmissionBatchWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AdmissionFormUpdateInput = {
  admissionBatch?: AdmissionBatchWhereUniqueInput;
  course?: CourseWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
