import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  address: string | null;
  balance: number | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
