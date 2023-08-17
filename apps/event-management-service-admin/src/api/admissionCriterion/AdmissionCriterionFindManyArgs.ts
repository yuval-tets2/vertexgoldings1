import { AdmissionCriterionWhereInput } from "./AdmissionCriterionWhereInput";
import { AdmissionCriterionOrderByInput } from "./AdmissionCriterionOrderByInput";

export type AdmissionCriterionFindManyArgs = {
  where?: AdmissionCriterionWhereInput;
  orderBy?: Array<AdmissionCriterionOrderByInput>;
  skip?: number;
  take?: number;
};
