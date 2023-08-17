/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "../../course/base/Course";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Employee } from "../../employee/base/Employee";
import { Faculty } from "../../faculty/base/Faculty";
import { University } from "../../university/base/University";

@ObjectType()
class Department {
  @ApiProperty({
    required: false,
    type: () => [Course],
  })
  @ValidateNested()
  @Type(() => Course)
  @IsOptional()
  courses?: Array<Course>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Employee],
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employee?: Array<Employee>;

  @ApiProperty({
    required: false,
    type: () => [Faculty],
  })
  @ValidateNested()
  @Type(() => Faculty)
  @IsOptional()
  faculty?: Array<Faculty>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => University,
  })
  @ValidateNested()
  @Type(() => University)
  university?: University;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Department as Department };
