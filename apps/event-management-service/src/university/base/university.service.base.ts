/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  University,
  Course,
  Department,
  Employee,
  Student,
} from "@prisma/client";

export class UniversityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UniversityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityCountArgs>
  ): Promise<number> {
    return this.prisma.university.count(args);
  }

  async findMany<T extends Prisma.UniversityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityFindManyArgs>
  ): Promise<University[]> {
    return this.prisma.university.findMany(args);
  }
  async findOne<T extends Prisma.UniversityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityFindUniqueArgs>
  ): Promise<University | null> {
    return this.prisma.university.findUnique(args);
  }
  async create<T extends Prisma.UniversityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityCreateArgs>
  ): Promise<University> {
    return this.prisma.university.create<T>(args);
  }
  async update<T extends Prisma.UniversityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityUpdateArgs>
  ): Promise<University> {
    return this.prisma.university.update<T>(args);
  }
  async delete<T extends Prisma.UniversityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UniversityDeleteArgs>
  ): Promise<University> {
    return this.prisma.university.delete(args);
  }

  async findCourses(
    parentId: string,
    args: Prisma.CourseFindManyArgs
  ): Promise<Course[]> {
    return this.prisma.university
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .courses(args);
  }

  async findDepartment(
    parentId: string,
    args: Prisma.DepartmentFindManyArgs
  ): Promise<Department[]> {
    return this.prisma.university
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .department(args);
  }

  async findEmployee(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.prisma.university
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employee(args);
  }

  async findStudents(
    parentId: string,
    args: Prisma.StudentFindManyArgs
  ): Promise<Student[]> {
    return this.prisma.university
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .students(args);
  }
}
