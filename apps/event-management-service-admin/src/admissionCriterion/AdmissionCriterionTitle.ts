import { AdmissionCriterion as TAdmissionCriterion } from "../api/admissionCriterion/AdmissionCriterion";

export const ADMISSIONCRITERION_TITLE_FIELD = "id";

export const AdmissionCriterionTitle = (
  record: TAdmissionCriterion
): string => {
  return record.id || String(record.id);
};
