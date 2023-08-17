import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UniversityModuleBase } from "./base/university.module.base";
import { UniversityService } from "./university.service";
import { UniversityController } from "./university.controller";
import { UniversityResolver } from "./university.resolver";

@Module({
  imports: [UniversityModuleBase, forwardRef(() => AuthModule)],
  controllers: [UniversityController],
  providers: [UniversityService, UniversityResolver],
  exports: [UniversityService],
})
export class UniversityModule {}
