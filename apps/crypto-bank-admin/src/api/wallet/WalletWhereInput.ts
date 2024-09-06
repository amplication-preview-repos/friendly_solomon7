import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  address?: StringNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
