import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarkSheetService } from "./markSheet.service";
import { MarkSheetControllerBase } from "./base/markSheet.controller.base";

@swagger.ApiTags("markSheets")
@common.Controller("markSheets")
export class MarkSheetController extends MarkSheetControllerBase {
  constructor(
    protected readonly service: MarkSheetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
