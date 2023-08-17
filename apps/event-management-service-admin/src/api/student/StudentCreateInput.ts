import { AdmissionFormCreateNestedManyWithoutStudentsInput } from "./AdmissionFormCreateNestedManyWithoutStudentsInput";
import { MarkSheetCreateNestedManyWithoutStudentsInput } from "./MarkSheetCreateNestedManyWithoutStudentsInput";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";

export type StudentCreateInput = {
  address?: string | null;
  admissionDate: Date;
  admissionForm?: AdmissionFormCreateNestedManyWithoutStudentsInput;
  dateOfBirth: Date;
  email: string;
  firstName: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  lastName: string;
  markSheet?: MarkSheetCreateNestedManyWithoutStudentsInput;
  phone?: string | null;
  university: UniversityWhereUniqueInput;
};
