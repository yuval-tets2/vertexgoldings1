import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdmissionCriterionServiceBase } from "./base/admissionCriterion.service.base";

@Injectable()
export class AdmissionCriterionService extends AdmissionCriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
