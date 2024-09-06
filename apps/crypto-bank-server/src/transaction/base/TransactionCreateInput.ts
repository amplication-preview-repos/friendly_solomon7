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
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumTransactionStatus } from "./EnumTransactionStatus";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TransactionCreateInput {
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
  amount?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionStatus,
  })
  @IsEnum(EnumTransactionStatus)
  @IsOptional()
  @Field(() => EnumTransactionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => WalletWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WalletWhereUniqueInput)
  @IsOptional()
  @Field(() => WalletWhereUniqueInput, {
    nullable: true,
  })
  wallet?: WalletWhereUniqueInput | null;
}

export { TransactionCreateInput as TransactionCreateInput };
