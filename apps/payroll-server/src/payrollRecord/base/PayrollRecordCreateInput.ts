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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeSalaryWhereUniqueInput } from "../../employeeSalary/base/EmployeeSalaryWhereUniqueInput";
import { PaySlipCreateNestedManyWithoutPayrollRecordsInput } from "./PaySlipCreateNestedManyWithoutPayrollRecordsInput";

@InputType()
class PayrollRecordCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeSalaryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeSalaryWhereUniqueInput, {
    nullable: true,
  })
  employeeSalary?: EmployeeSalaryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaySlipCreateNestedManyWithoutPayrollRecordsInput,
  })
  @ValidateNested()
  @Type(() => PaySlipCreateNestedManyWithoutPayrollRecordsInput)
  @IsOptional()
  @Field(() => PaySlipCreateNestedManyWithoutPayrollRecordsInput, {
    nullable: true,
  })
  paySlips?: PaySlipCreateNestedManyWithoutPayrollRecordsInput;
}

export { PayrollRecordCreateInput as PayrollRecordCreateInput };