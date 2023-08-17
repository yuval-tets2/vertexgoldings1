/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAdmissionCriterionArgs } from "./CreateAdmissionCriterionArgs";
import { UpdateAdmissionCriterionArgs } from "./UpdateAdmissionCriterionArgs";
import { DeleteAdmissionCriterionArgs } from "./DeleteAdmissionCriterionArgs";
import { AdmissionCriterionCountArgs } from "./AdmissionCriterionCountArgs";
import { AdmissionCriterionFindManyArgs } from "./AdmissionCriterionFindManyArgs";
import { AdmissionCriterionFindUniqueArgs } from "./AdmissionCriterionFindUniqueArgs";
import { AdmissionCriterion } from "./AdmissionCriterion";
import { Course } from "../../course/base/Course";
import { AdmissionCriterionService } from "../admissionCriterion.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdmissionCriterion)
export class AdmissionCriterionResolverBase {
  constructor(
    protected readonly service: AdmissionCriterionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "read",
    possession: "any",
  })
  async _admissionCriteriaMeta(
    @graphql.Args() args: AdmissionCriterionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AdmissionCriterion])
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "read",
    possession: "any",
  })
  async admissionCriteria(
    @graphql.Args() args: AdmissionCriterionFindManyArgs
  ): Promise<AdmissionCriterion[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AdmissionCriterion, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "read",
    possession: "own",
  })
  async admissionCriterion(
    @graphql.Args() args: AdmissionCriterionFindUniqueArgs
  ): Promise<AdmissionCriterion | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AdmissionCriterion)
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "create",
    possession: "any",
  })
  async createAdmissionCriterion(
    @graphql.Args() args: CreateAdmissionCriterionArgs
  ): Promise<AdmissionCriterion> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        course: {
          connect: args.data.course,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AdmissionCriterion)
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "update",
    possession: "any",
  })
  async updateAdmissionCriterion(
    @graphql.Args() args: UpdateAdmissionCriterionArgs
  ): Promise<AdmissionCriterion | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          course: {
            connect: args.data.course,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AdmissionCriterion)
  @nestAccessControl.UseRoles({
    resource: "AdmissionCriterion",
    action: "delete",
    possession: "any",
  })
  async deleteAdmissionCriterion(
    @graphql.Args() args: DeleteAdmissionCriterionArgs
  ): Promise<AdmissionCriterion | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourse(
    @graphql.Parent() parent: AdmissionCriterion
  ): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
