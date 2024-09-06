import { SortOrder } from "../../util/SortOrder";

export type SmartContractOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
