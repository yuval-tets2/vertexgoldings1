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
import { ValidateNested, IsDate, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Student } from "../../student/base/Student";

@ObjectType()
class MarkSheet {
  @ApiProperty({
    required: true,
    type: () => Course,
  })
  @ValidateNested()
  @Type(() => Course)
  course?: Course;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  marksObtained!: number;

  @ApiProperty({
    required: true,
    type: () => Student,
  })
  @ValidateNested()
  @Type(() => Student)
  student?: Student;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  totalMarks!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MarkSheet as MarkSheet };
