import { AuditLog } from "../auditLog/AuditLog";
import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type User = {
  auditLogs?: Array<AuditLog>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  twoFactorEnabled: boolean | null;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
