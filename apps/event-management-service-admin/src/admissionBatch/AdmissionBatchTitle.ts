import { AdmissionBatch as TAdmissionBatch } from "../api/admissionBatch/AdmissionBatch";

export const ADMISSIONBATCH_TITLE_FIELD = "name";

export const AdmissionBatchTitle = (record: TAdmissionBatch): string => {
  return record.name || String(record.id);
};
