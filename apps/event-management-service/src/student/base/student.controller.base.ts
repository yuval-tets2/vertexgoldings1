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
import { StudentService } from "../student.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StudentCreateInput } from "./StudentCreateInput";
import { StudentWhereInput } from "./StudentWhereInput";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentUpdateInput } from "./StudentUpdateInput";
import { Student } from "./Student";
import { AdmissionFormFindManyArgs } from "../../admissionForm/base/AdmissionFormFindManyArgs";
import { AdmissionForm } from "../../admissionForm/base/AdmissionForm";
import { AdmissionFormWhereUniqueInput } from "../../admissionForm/base/AdmissionFormWhereUniqueInput";
import { MarkSheetFindManyArgs } from "../../markSheet/base/MarkSheetFindManyArgs";
import { MarkSheet } from "../../markSheet/base/MarkSheet";
import { MarkSheetWhereUniqueInput } from "../../markSheet/base/MarkSheetWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StudentControllerBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Student })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: StudentCreateInput): Promise<Student> {
    return await this.service.create({
      data: {
        ...data,

        university: {
          connect: data.university,
        },
      },
      select: {
        address: true,
        admissionDate: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        phone: true,

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
  @swagger.ApiOkResponse({ type: [Student] })
  @ApiNestedQuery(StudentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Student[]> {
    const args = plainToClass(StudentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        admissionDate: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        phone: true,

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
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        admissionDate: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        phone: true,

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
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() data: StudentUpdateInput
  ): Promise<Student | null> {
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
          address: true,
          admissionDate: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          phone: true,

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
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          admissionDate: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          phone: true,

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
  @common.Get("/:id/admissionForm")
  @ApiNestedQuery(AdmissionFormFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AdmissionForm",
    action: "read",
    possession: "any",
  })
  async findManyAdmissionForm(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<AdmissionForm[]> {
    const query = plainToClass(AdmissionFormFindManyArgs, request.query);
    const results = await this.service.findAdmissionForm(params.id, {
      ...query,
      select: {
        admissionBatch: {
          select: {
            id: true,
          },
        },

        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        formSubmittedAt: true,
        id: true,

        student: {
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

  @common.Post("/:id/admissionForm")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async connectAdmissionForm(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AdmissionFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admissionForm: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/admissionForm")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateAdmissionForm(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AdmissionFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admissionForm: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/admissionForm")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async disconnectAdmissionForm(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AdmissionFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admissionForm: {
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
  @common.Get("/:id/markSheet")
  @ApiNestedQuery(MarkSheetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MarkSheet",
    action: "read",
    possession: "any",
  })
  async findManyMarkSheet(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<MarkSheet[]> {
    const query = plainToClass(MarkSheetFindManyArgs, request.query);
    const results = await this.service.findMarkSheet(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        marksObtained: true,

        student: {
          select: {
            id: true,
          },
        },

        totalMarks: true,
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

  @common.Post("/:id/markSheet")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async connectMarkSheet(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: MarkSheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      markSheet: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/markSheet")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateMarkSheet(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: MarkSheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      markSheet: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/markSheet")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async disconnectMarkSheet(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: MarkSheetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      markSheet: {
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
