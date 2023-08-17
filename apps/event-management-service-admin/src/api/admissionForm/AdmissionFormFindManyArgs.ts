import { AdmissionFormWhereInput } from "./AdmissionFormWhereInput";
import { AdmissionFormOrderByInput } from "./AdmissionFormOrderByInput";

export type AdmissionFormFindManyArgs = {
  where?: AdmissionFormWhereInput;
  orderBy?: Array<AdmissionFormOrderByInput>;
  skip?: number;
  take?: number;
};
