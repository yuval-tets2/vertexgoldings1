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
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { AdmissionFormCreateNestedManyWithoutStudentsInput } from "./AdmissionFormCreateNestedManyWithoutStudentsInput";
import { EnumStudentGender } from "./EnumStudentGender";
import { MarkSheetCreateNestedManyWithoutStudentsInput } from "./MarkSheetCreateNestedManyWithoutStudentsInput";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  admissionDate!: Date;

  @ApiProperty({
    required: false,
    type: () => AdmissionFormCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => AdmissionFormCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => AdmissionFormCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  admissionForm?: AdmissionFormCreateNestedManyWithoutStudentsInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateOfBirth!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    enum: EnumStudentGender,
  })
  @IsEnum(EnumStudentGender)
  @Field(() => EnumStudentGender)
  gender!: "MALE" | "FEMALE" | "OTHER";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: () => MarkSheetCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => MarkSheetCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => MarkSheetCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  markSheet?: MarkSheetCreateNestedManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: true,
    type: () => UniversityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniversityWhereUniqueInput)
  @Field(() => UniversityWhereUniqueInput)
  university!: UniversityWhereUniqueInput;
}

export { StudentCreateInput as StudentCreateInput };
