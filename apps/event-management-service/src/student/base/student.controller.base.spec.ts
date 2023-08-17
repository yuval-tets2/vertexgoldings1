import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StudentController } from "../student.controller";
import { StudentService } from "../student.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  admissionDate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  admissionDate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    admissionDate: new Date(),
    createdAt: new Date(),
    dateOfBirth: new Date(),
    email: "exampleEmail",
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    phone: "examplePhone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  admissionDate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Student", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentService,
          useValue: service,
        },
      ],
      controllers: [StudentController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /students", async () => {
    await request(app.getHttpServer())
      .post("/students")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        admissionDate: CREATE_RESULT.admissionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /students", async () => {
    await request(app.getHttpServer())
      .get("/students")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          admissionDate: FIND_MANY_RESULT[0].admissionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /students/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/students"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /students/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/students"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        admissionDate: FIND_ONE_RESULT.admissionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /students existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/students")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        admissionDate: CREATE_RESULT.admissionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/students")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
