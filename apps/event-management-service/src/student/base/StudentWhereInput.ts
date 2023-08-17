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
import { AdmissionFormListRelationFilter } from "../../admissionForm/base/AdmissionFormListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MarkSheetListRelationFilter } from "../../markSheet/base/MarkSheetListRelationFilter";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: () => AdmissionFormListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AdmissionFormListRelationFilter)
  @IsOptional()
  @Field(() => AdmissionFormListRelationFilter, {
    nullable: true,
  })
  admissionForm?: AdmissionFormListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MarkSheetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MarkSheetListRelationFilter)
  @IsOptional()
  @Field(() => MarkSheetListRelationFilter, {
    nullable: true,
  })
  markSheet?: MarkSheetListRelationFilter;

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

export { StudentWhereInput as StudentWhereInput };
