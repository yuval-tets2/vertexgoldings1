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
import { CourseUpdateManyWithoutFacultiesInput } from "./CourseUpdateManyWithoutFacultiesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";

@InputType()
class FacultyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourseUpdateManyWithoutFacultiesInput,
  })
  @ValidateNested()
  @Type(() => CourseUpdateManyWithoutFacultiesInput)
  @IsOptional()
  @Field(() => CourseUpdateManyWithoutFacultiesInput, {
    nullable: true,
  })
  courses?: CourseUpdateManyWithoutFacultiesInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;
}

export { FacultyUpdateInput as FacultyUpdateInput };
