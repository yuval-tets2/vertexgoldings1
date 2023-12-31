/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourseListRelationFilter } from "../../course/base/CourseListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeListRelationFilter } from "../../employee/base/EmployeeListRelationFilter";
import { FacultyListRelationFilter } from "../../faculty/base/FacultyListRelationFilter";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";

@InputType()
class DepartmentWhereInput {
  @ApiProperty({
    required: false,
    type: () => CourseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourseListRelationFilter)
  @IsOptional()
  @Field(() => CourseListRelationFilter, {
    nullable: true,
  })
  courses?: CourseListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeListRelationFilter, {
    nullable: true,
  })
  employee?: EmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FacultyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FacultyListRelationFilter)
  @IsOptional()
  @Field(() => FacultyListRelationFilter, {
    nullable: true,
  })
  faculty?: FacultyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UniversityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniversityWhereUniqueInput)
  @IsOptional()
  @Field(() => UniversityWhereUniqueInput, {
    nullable: true,
  })
  university?: UniversityWhereUniqueInput;
}

export { DepartmentWhereInput as DepartmentWhereInput };
