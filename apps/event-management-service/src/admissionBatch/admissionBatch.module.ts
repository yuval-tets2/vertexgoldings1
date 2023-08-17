import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdmissionBatchModuleBase } from "./base/admissionBatch.module.base";
import { AdmissionBatchService } from "./admissionBatch.service";
import { AdmissionBatchController } from "./admissionBatch.controller";
import { AdmissionBatchResolver } from "./admissionBatch.resolver";

@Module({
  imports: [AdmissionBatchModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdmissionBatchController],
  providers: [AdmissionBatchService, AdmissionBatchResolver],
  exports: [AdmissionBatchService],
})
export class AdmissionBatchModule {}
