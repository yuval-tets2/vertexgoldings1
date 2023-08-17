import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmissionFormService } from "./admissionForm.service";
import { AdmissionFormControllerBase } from "./base/admissionForm.controller.base";

@swagger.ApiTags("admissionForms")
@common.Controller("admissionForms")
export class AdmissionFormController extends AdmissionFormControllerBase {
  constructor(
    protected readonly service: AdmissionFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
