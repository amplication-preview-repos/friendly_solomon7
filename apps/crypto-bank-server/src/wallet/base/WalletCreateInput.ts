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
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
  IsEnum,
} from "class-validator";

import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { Type } from "class-transformer";
import { EnumWalletTypeField } from "./EnumWalletTypeField";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WalletCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutWalletsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutWalletsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutWalletsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;

  @ApiProperty({
    required: false,
    enum: EnumWalletTypeField,
  })
  @IsEnum(EnumWalletTypeField)
  @IsOptional()
  @Field(() => EnumWalletTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WalletCreateInput as WalletCreateInput };