import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmissionCriterionService } from "./admissionCriterion.service";
import { AdmissionCriterionControllerBase } from "./base/admissionCriterion.controller.base";

@swagger.ApiTags("admissionCriteria")
@common.Controller("admissionCriteria")
export class AdmissionCriterionController extends AdmissionCriterionControllerBase {
  constructor(
    protected readonly service: AdmissionCriterionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
