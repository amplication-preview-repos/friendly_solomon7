import { AuditLogCreateNestedManyWithoutUsersInput } from "./AuditLogCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  auditLogs?: AuditLogCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  twoFactorEnabled?: boolean | null;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
