import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarkSheetServiceBase } from "./base/markSheet.service.base";

@Injectable()
export class MarkSheetService extends MarkSheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
