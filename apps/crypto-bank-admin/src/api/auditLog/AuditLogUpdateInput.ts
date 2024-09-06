import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: string | null;
  description?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
