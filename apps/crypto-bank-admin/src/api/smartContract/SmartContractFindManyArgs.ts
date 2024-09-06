import { SmartContractWhereInput } from "./SmartContractWhereInput";
import { SmartContractOrderByInput } from "./SmartContractOrderByInput";

export type SmartContractFindManyArgs = {
  where?: SmartContractWhereInput;
  orderBy?: Array<SmartContractOrderByInput>;
  skip?: number;
  take?: number;
};
