import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  auditLogs?: AuditLogListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  twoFactorEnabled?: BooleanNullableFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
