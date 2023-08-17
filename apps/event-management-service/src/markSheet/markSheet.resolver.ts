import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MarkSheetResolverBase } from "./base/markSheet.resolver.base";
import { MarkSheet } from "./base/MarkSheet";
import { MarkSheetService } from "./markSheet.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MarkSheet)
export class MarkSheetResolver extends MarkSheetResolverBase {
  constructor(
    protected readonly service: MarkSheetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
