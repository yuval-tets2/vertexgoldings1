import { AdmissionForm } from "../admissionForm/AdmissionForm";
import { MarkSheet } from "../markSheet/MarkSheet";
import { University } from "../university/University";

export type Student = {
  address: string | null;
  admissionDate: Date;
  admissionForm?: Array<AdmissionForm>;
  createdAt: Date;
  dateOfBirth: Date;
  email: string;
  firstName: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  id: string;
  lastName: string;
  markSheet?: Array<MarkSheet>;
  phone: string | null;
  university?: University;
  updatedAt: Date;
};
