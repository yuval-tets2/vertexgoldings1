import { AdmissionBatch } from "../admissionBatch/AdmissionBatch";
import { AdmissionCriterion } from "../admissionCriterion/AdmissionCriterion";
import { AdmissionForm } from "../admissionForm/AdmissionForm";
import { Department } from "../department/Department";
import { Faculty } from "../faculty/Faculty";
import { MarkSheet } from "../markSheet/MarkSheet";
import { University } from "../university/University";

export type Course = {
  admissionBatches?: Array<AdmissionBatch>;
  admissionCriteria?: Array<AdmissionCriterion>;
  admissionForm?: Array<AdmissionForm>;
  createdAt: Date;
  credits: number;
  department?: Department;
  description: string | null;
  faculty?: Faculty | null;
  id: string;
  markSheet?: Array<MarkSheet>;
  name: string;
  university?: University;
  updatedAt: Date;
};
