import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarkSheetModuleBase } from "./base/markSheet.module.base";
import { MarkSheetService } from "./markSheet.service";
import { MarkSheetController } from "./markSheet.controller";
import { MarkSheetResolver } from "./markSheet.resolver";

@Module({
  imports: [MarkSheetModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarkSheetController],
  providers: [MarkSheetService, MarkSheetResolver],
  exports: [MarkSheetService],
})
export class MarkSheetModule {}
