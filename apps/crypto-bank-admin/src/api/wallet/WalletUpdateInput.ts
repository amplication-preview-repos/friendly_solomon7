import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  address?: string | null;
  balance?: number | null;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
