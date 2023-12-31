import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { EventModule } from "./event/event.module";
import { CustomerModule } from "./customer/customer.module";
import { UniversityModule } from "./university/university.module";
import { StudentModule } from "./student/student.module";
import { CourseModule } from "./course/course.module";
import { DepartmentModule } from "./department/department.module";
import { AdmissionBatchModule } from "./admissionBatch/admissionBatch.module";
import { AdmissionFormModule } from "./admissionForm/admissionForm.module";
import { FacultyModule } from "./faculty/faculty.module";
import { MarkSheetModule } from "./markSheet/markSheet.module";
import { EmployeeModule } from "./employee/employee.module";
import { AdmissionCriterionModule } from "./admissionCriterion/admissionCriterion.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    EventModule,
    CustomerModule,
    UniversityModule,
    StudentModule,
    CourseModule,
    DepartmentModule,
    AdmissionBatchModule,
    AdmissionFormModule,
    FacultyModule,
    MarkSheetModule,
    EmployeeModule,
    AdmissionCriterionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
