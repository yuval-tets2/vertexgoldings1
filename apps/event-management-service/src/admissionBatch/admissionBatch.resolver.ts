import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdmissionBatchResolverBase } from "./base/admissionBatch.resolver.base";
import { AdmissionBatch } from "./base/AdmissionBatch";
import { AdmissionBatchService } from "./admissionBatch.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdmissionBatch)
export class AdmissionBatchResolver extends AdmissionBatchResolverBase {
  constructor(
    protected readonly service: AdmissionBatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
