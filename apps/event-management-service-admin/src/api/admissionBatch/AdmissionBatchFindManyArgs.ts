import { AdmissionBatchWhereInput } from "./AdmissionBatchWhereInput";
import { AdmissionBatchOrderByInput } from "./AdmissionBatchOrderByInput";

export type AdmissionBatchFindManyArgs = {
  where?: AdmissionBatchWhereInput;
  orderBy?: Array<AdmissionBatchOrderByInput>;
  skip?: number;
  take?: number;
};
