import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UniversityServiceBase } from "./base/university.service.base";

@Injectable()
export class UniversityService extends UniversityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
