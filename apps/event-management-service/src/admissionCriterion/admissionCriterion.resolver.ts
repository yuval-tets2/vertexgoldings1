import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdmissionCriterionResolverBase } from "./base/admissionCriterion.resolver.base";
import { AdmissionCriterion } from "./base/AdmissionCriterion";
import { AdmissionCriterionService } from "./admissionCriterion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdmissionCriterion)
export class AdmissionCriterionResolver extends AdmissionCriterionResolverBase {
  constructor(
    protected readonly service: AdmissionCriterionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
