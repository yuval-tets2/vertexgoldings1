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
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UniversityWhereUniqueInput } from "../../university/base/UniversityWhereUniqueInput";

@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: true,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @Field(() => DepartmentWhereUniqueInput)
  department!: DepartmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  designation!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: true,
    type: () => UniversityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniversityWhereUniqueInput)
  @Field(() => UniversityWhereUniqueInput)
  university!: UniversityWhereUniqueInput;
}

export { EmployeeCreateInput as EmployeeCreateInput };
