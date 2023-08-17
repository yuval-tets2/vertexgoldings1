import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdmissionFormServiceBase } from "./base/admissionForm.service.base";

@Injectable()
export class AdmissionFormService extends AdmissionFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
