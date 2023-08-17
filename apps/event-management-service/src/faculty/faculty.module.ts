import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FacultyModuleBase } from "./base/faculty.module.base";
import { FacultyService } from "./faculty.service";
import { FacultyController } from "./faculty.controller";
import { FacultyResolver } from "./faculty.resolver";

@Module({
  imports: [FacultyModuleBase, forwardRef(() => AuthModule)],
  controllers: [FacultyController],
  providers: [FacultyService, FacultyResolver],
  exports: [FacultyService],
})
export class FacultyModule {}
