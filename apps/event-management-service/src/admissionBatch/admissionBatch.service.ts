import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdmissionBatchServiceBase } from "./base/admissionBatch.service.base";

@Injectable()
export class AdmissionBatchService extends AdmissionBatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
