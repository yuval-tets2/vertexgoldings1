import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FacultyService } from "./faculty.service";
import { FacultyControllerBase } from "./base/faculty.controller.base";

@swagger.ApiTags("faculties")
@common.Controller("faculties")
export class FacultyController extends FacultyControllerBase {
  constructor(
    protected readonly service: FacultyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
