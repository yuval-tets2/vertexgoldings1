import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdmissionFormModuleBase } from "./base/admissionForm.module.base";
import { AdmissionFormService } from "./admissionForm.service";
import { AdmissionFormController } from "./admissionForm.controller";
import { AdmissionFormResolver } from "./admissionForm.resolver";

@Module({
  imports: [AdmissionFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdmissionFormController],
  providers: [AdmissionFormService, AdmissionFormResolver],
  exports: [AdmissionFormService],
})
export class AdmissionFormModule {}
