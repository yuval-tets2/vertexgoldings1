/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdmissionCriterionWhereInput } from "./AdmissionCriterionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdmissionCriterionOrderByInput } from "./AdmissionCriterionOrderByInput";

@ArgsType()
class AdmissionCriterionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdmissionCriterionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdmissionCriterionWhereInput, { nullable: true })
  @Type(() => AdmissionCriterionWhereInput)
  where?: AdmissionCriterionWhereInput;

  @ApiProperty({
    required: false,
    type: [AdmissionCriterionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdmissionCriterionOrderByInput], { nullable: true })
  @Type(() => AdmissionCriterionOrderByInput)
  orderBy?: Array<AdmissionCriterionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdmissionCriterionFindManyArgs as AdmissionCriterionFindManyArgs };
