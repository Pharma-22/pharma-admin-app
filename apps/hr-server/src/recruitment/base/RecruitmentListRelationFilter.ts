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
import { RecruitmentWhereInput } from "./RecruitmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecruitmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecruitmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentWhereInput)
  @IsOptional()
  @Field(() => RecruitmentWhereInput, {
    nullable: true,
  })
  every?: RecruitmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecruitmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentWhereInput)
  @IsOptional()
  @Field(() => RecruitmentWhereInput, {
    nullable: true,
  })
  some?: RecruitmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecruitmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentWhereInput)
  @IsOptional()
  @Field(() => RecruitmentWhereInput, {
    nullable: true,
  })
  none?: RecruitmentWhereInput;
}
export { RecruitmentListRelationFilter as RecruitmentListRelationFilter };
