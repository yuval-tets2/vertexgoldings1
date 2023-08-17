import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmissionBatchService } from "./admissionBatch.service";
import { AdmissionBatchControllerBase } from "./base/admissionBatch.controller.base";

@swagger.ApiTags("admissionBatches")
@common.Controller("admissionBatches")
export class AdmissionBatchController extends AdmissionBatchControllerBase {
  constructor(
    protected readonly service: AdmissionBatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
