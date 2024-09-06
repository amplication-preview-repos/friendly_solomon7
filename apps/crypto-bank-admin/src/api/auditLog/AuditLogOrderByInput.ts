import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
