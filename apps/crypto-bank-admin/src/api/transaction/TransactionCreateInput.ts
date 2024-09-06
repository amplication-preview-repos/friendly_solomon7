import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
