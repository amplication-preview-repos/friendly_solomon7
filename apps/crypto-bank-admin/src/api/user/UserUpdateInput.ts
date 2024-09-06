import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  auditLogs?: AuditLogUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  twoFactorEnabled?: boolean | null;
  username?: string;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
