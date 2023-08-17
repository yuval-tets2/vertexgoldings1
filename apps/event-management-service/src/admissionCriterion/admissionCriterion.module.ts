import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdmissionCriterionModuleBase } from "./base/admissionCriterion.module.base";
import { AdmissionCriterionService } from "./admissionCriterion.service";
import { AdmissionCriterionController } from "./admissionCriterion.controller";
import { AdmissionCriterionResolver } from "./admissionCriterion.resolver";

@Module({
  imports: [AdmissionCriterionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdmissionCriterionController],
  providers: [AdmissionCriterionService, AdmissionCriterionResolver],
  exports: [AdmissionCriterionService],
})
export class AdmissionCriterionModule {}
