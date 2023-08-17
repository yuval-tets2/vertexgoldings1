import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdmissionFormResolverBase } from "./base/admissionForm.resolver.base";
import { AdmissionForm } from "./base/AdmissionForm";
import { AdmissionFormService } from "./admissionForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdmissionForm)
export class AdmissionFormResolver extends AdmissionFormResolverBase {
  constructor(
    protected readonly service: AdmissionFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
