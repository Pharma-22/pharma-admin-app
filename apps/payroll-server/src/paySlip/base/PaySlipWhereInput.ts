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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PayrollRecordWhereUniqueInput } from "../../payrollRecord/base/PayrollRecordWhereUniqueInput";

@InputType()
class PaySlipWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  employee?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  issuedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PayrollRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PayrollRecordWhereUniqueInput)
  @IsOptional()
  @Field(() => PayrollRecordWhereUniqueInput, {
    nullable: true,
  })
  payrollRecord?: PayrollRecordWhereUniqueInput;
}

export { PaySlipWhereInput as PaySlipWhereInput };