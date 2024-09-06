import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogCreateInput = {
  action?: string | null;
  description?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
