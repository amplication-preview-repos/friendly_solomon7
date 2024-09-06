import { User } from "../user/User";

export type AuditLog = {
  action: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
