import { AdmissionForm as TAdmissionForm } from "../api/admissionForm/AdmissionForm";

export const ADMISSIONFORM_TITLE_FIELD = "id";

export const AdmissionFormTitle = (record: TAdmissionForm): string => {
  return record.id || String(record.id);
};
