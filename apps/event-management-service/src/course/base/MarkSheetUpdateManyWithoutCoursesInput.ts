/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MarkSheetWhereUniqueInput } from "../../markSheet/base/MarkSheetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MarkSheetUpdateManyWithoutCoursesInput {
  @Field(() => [MarkSheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarkSheetWhereUniqueInput],
  })
  connect?: Array<MarkSheetWhereUniqueInput>;

  @Field(() => [MarkSheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarkSheetWhereUniqueInput],
  })
  disconnect?: Array<MarkSheetWhereUniqueInput>;

  @Field(() => [MarkSheetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarkSheetWhereUniqueInput],
  })
  set?: Array<MarkSheetWhereUniqueInput>;
}

export { MarkSheetUpdateManyWithoutCoursesInput as MarkSheetUpdateManyWithoutCoursesInput };
