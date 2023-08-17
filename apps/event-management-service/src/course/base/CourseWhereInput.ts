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
import { AdmissionBatchListRelationFilter } from "../../admissionBatch/base/AdmissionBatchListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AdmissionCriterionListRelationFilter } from "../../admissionCriterion/base/AdmissionCriterionListRelationFilter";
import { AdmissionFormListRelationFilter } from "../../admissionForm/base/AdmissionFormListRelationFilter";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { FacultyWhereUniqueInput } from "../../faculty/base/FacultyWhereUniqueInput";
import { MarkSheetListRelationFilter } from "../../markSheet/base/MarkSheetListRelationFilter";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";

@InputType()
class CourseWhereInput {
  @ApiProperty({
    required: false,
    type: () => AdmissionBatchListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AdmissionBatchListRelationFilter)
  @IsOptional()
  @Field(() => AdmissionBatchListRelationFilter, {
    nullable: true,
  })
  admissionBatches?: AdmissionBatchListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AdmissionCriterionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AdmissionCriterionListRelationFilter)
  @IsOptional()
  @Field(() => AdmissionCriterionListRelationFilter, {
    nullable: true,
  })
  admissionCriteria?: AdmissionCriterionListRelationFilter;

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
    type: () => FacultyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacultyWhereUniqueInput)
  @IsOptional()
  @Field(() => FacultyWhereUniqueInput, {
    nullable: true,
  })
  faculty?: FacultyWhereUniqueInput;

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

export { CourseWhereInput as CourseWhereInput };
