import { AdmissionFormUpdateManyWithoutStudentsInput } from "./AdmissionFormUpdateManyWithoutStudentsInput";
import { MarkSheetUpdateManyWithoutStudentsInput } from "./MarkSheetUpdateManyWithoutStudentsInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  admissionDate?: Date;
  admissionForm?: AdmissionFormUpdateManyWithoutStudentsInput;
  dateOfBirth?: Date;
  email?: string;
  firstName?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  lastName?: string;
  markSheet?: MarkSheetUpdateManyWithoutStudentsInput;
  phone?: string | null;
  university?: UniversityWhereUniqueInput;
};
