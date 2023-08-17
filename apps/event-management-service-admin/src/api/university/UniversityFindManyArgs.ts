import { UniversityWhereInput } from "./UniversityWhereInput";
import { UniversityOrderByInput } from "./UniversityOrderByInput";

export type UniversityFindManyArgs = {
  where?: UniversityWhereInput;
  orderBy?: Array<UniversityOrderByInput>;
  skip?: number;
  take?: number;
};
