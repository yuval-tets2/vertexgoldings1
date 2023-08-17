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
import { UniversityWhereUniqueInput } from "./UniversityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class UniversityFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => UniversityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniversityWhereUniqueInput)
  @Field(() => UniversityWhereUniqueInput, { nullable: false })
  where!: UniversityWhereUniqueInput;
}

export { UniversityFindUniqueArgs as UniversityFindUniqueArgs };