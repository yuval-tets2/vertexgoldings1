/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DepartmentService } from "../department.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DepartmentCreateInput } from "./DepartmentCreateInput";
import { DepartmentWhereInput } from "./DepartmentWhereInput";
import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentFindManyArgs } from "./DepartmentFindManyArgs";
import { DepartmentUpdateInput } from "./DepartmentUpdateInput";
import { Department } from "./Department";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { FacultyFindManyArgs } from "../../faculty/base/FacultyFindManyArgs";
import { Faculty } from "../../faculty/base/Faculty";
import { FacultyWhereUniqueInput } from "../../faculty/base/FacultyWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DepartmentControllerBase {
  constructor(
    protected readonly service: DepartmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Department })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: DepartmentCreateInput
  ): Promise<Department> {
    return await this.service.create({
      data: {
        ...data,

        university: {
          connect: data.university,
        },
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        university: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Department] })
  @ApiNestedQuery(DepartmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Department[]> {
    const args = plainToClass(DepartmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        university: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        university: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() data: DepartmentUpdateInput
  ): Promise<Department | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          university: {
            connect: data.university,
          },
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          university: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          university: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/courses")
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async findManyCourses(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Course[]> {
    const query = plainToClass(CourseFindManyArgs, request.query);
    const results = await this.service.findCourses(params.id, {
      ...query,
      select: {
        comment: true,
        createdAt: true,
        credits: true,

        department: {
          select: {
            id: true,
          },
        },

        description: true,

        faculty: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,

        university: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async connectCourses(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async updateCourses(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async disconnectCourses(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/employee")
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async findManyEmployee(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployee(params.id, {
      ...query,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        designation: true,
        firstName: true,
        id: true,
        lastName: true,

        university: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employee")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async connectEmployee(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employee: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employee")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async updateEmployee(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employee: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employee")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async disconnectEmployee(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employee: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/faculty")
  @ApiNestedQuery(FacultyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Faculty",
    action: "read",
    possession: "any",
  })
  async findManyFaculty(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Faculty[]> {
    const query = plainToClass(FacultyFindManyArgs, request.query);
    const results = await this.service.findFaculty(params.id, {
      ...query,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/faculty")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async connectFaculty(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: FacultyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      faculty: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/faculty")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async updateFaculty(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: FacultyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      faculty: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/faculty")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async disconnectFaculty(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: FacultyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      faculty: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
