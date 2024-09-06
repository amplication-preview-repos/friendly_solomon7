import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  address?: string | null;
  balance?: number | null;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
