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
import { CreateUniversityArgs } from "./CreateUniversityArgs";
import { UpdateUniversityArgs } from "./UpdateUniversityArgs";
import { DeleteUniversityArgs } from "./DeleteUniversityArgs";
import { UniversityCountArgs } from "./UniversityCountArgs";
import { UniversityFindManyArgs } from "./UniversityFindManyArgs";
import { UniversityFindUniqueArgs } from "./UniversityFindUniqueArgs";
import { University } from "./University";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { DepartmentFindManyArgs } from "../../department/base/DepartmentFindManyArgs";
import { Department } from "../../department/base/Department";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { UniversityService } from "../university.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => University)
export class UniversityResolverBase {
  constructor(
    protected readonly service: UniversityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "read",
    possession: "any",
  })
  async _universitiesMeta(
    @graphql.Args() args: UniversityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [University])
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "read",
    possession: "any",
  })
  async universities(
    @graphql.Args() args: UniversityFindManyArgs
  ): Promise<University[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => University, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "read",
    possession: "own",
  })
  async university(
    @graphql.Args() args: UniversityFindUniqueArgs
  ): Promise<University | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => University)
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "create",
    possession: "any",
  })
  async createUniversity(
    @graphql.Args() args: CreateUniversityArgs
  ): Promise<University> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => University)
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "update",
    possession: "any",
  })
  async updateUniversity(
    @graphql.Args() args: UpdateUniversityArgs
  ): Promise<University | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => University)
  @nestAccessControl.UseRoles({
    resource: "University",
    action: "delete",
    possession: "any",
  })
  async deleteUniversity(
    @graphql.Args() args: DeleteUniversityArgs
  ): Promise<University | null> {
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
  @graphql.ResolveField(() => [Course], { name: "courses" })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourses(
    @graphql.Parent() parent: University,
    @graphql.Args() args: CourseFindManyArgs
  ): Promise<Course[]> {
    const results = await this.service.findCourses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Department], { name: "department" })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "any",
  })
  async resolveFieldDepartment(
    @graphql.Parent() parent: University,
    @graphql.Args() args: DepartmentFindManyArgs
  ): Promise<Department[]> {
    const results = await this.service.findDepartment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Employee], { name: "employee" })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async resolveFieldEmployee(
    @graphql.Parent() parent: University,
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<Employee[]> {
    const results = await this.service.findEmployee(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Student], { name: "students" })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async resolveFieldStudents(
    @graphql.Parent() parent: University,
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    const results = await this.service.findStudents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}