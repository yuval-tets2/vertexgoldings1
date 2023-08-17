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
import { CourseCreateNestedManyWithoutUniversitiesInput } from "./CourseCreateNestedManyWithoutUniversitiesInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DepartmentCreateNestedManyWithoutUniversitiesInput } from "./DepartmentCreateNestedManyWithoutUniversitiesInput";
import { EmployeeCreateNestedManyWithoutUniversitiesInput } from "./EmployeeCreateNestedManyWithoutUniversitiesInput";
import { StudentCreateNestedManyWithoutUniversitiesInput } from "./StudentCreateNestedManyWithoutUniversitiesInput";

@InputType()
class UniversityCreateInput {
  @ApiProperty({
    required: false,
    type: () => CourseCreateNestedManyWithoutUniversitiesInput,
  })
  @ValidateNested()
  @Type(() => CourseCreateNestedManyWithoutUniversitiesInput)
  @IsOptional()
  @Field(() => CourseCreateNestedManyWithoutUniversitiesInput, {
    nullable: true,
  })
  courses?: CourseCreateNestedManyWithoutUniversitiesInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentCreateNestedManyWithoutUniversitiesInput,
  })
  @ValidateNested()
  @Type(() => DepartmentCreateNestedManyWithoutUniversitiesInput)
  @IsOptional()
  @Field(() => DepartmentCreateNestedManyWithoutUniversitiesInput, {
    nullable: true,
  })
  department?: DepartmentCreateNestedManyWithoutUniversitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutUniversitiesInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutUniversitiesInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutUniversitiesInput, {
    nullable: true,
  })
  employee?: EmployeeCreateNestedManyWithoutUniversitiesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  established!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  location!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => StudentCreateNestedManyWithoutUniversitiesInput,
  })
  @ValidateNested()
  @Type(() => StudentCreateNestedManyWithoutUniversitiesInput)
  @IsOptional()
  @Field(() => StudentCreateNestedManyWithoutUniversitiesInput, {
    nullable: true,
  })
  students?: StudentCreateNestedManyWithoutUniversitiesInput;
}

export { UniversityCreateInput as UniversityCreateInput };