import { SmartContract as TSmartContract } from "../api/smartContract/SmartContract";

export const SMARTCONTRACT_TITLE_FIELD = "name";

export const SmartContractTitle = (record: TSmartContract): string => {
  return record.name?.toString() || String(record.id);
};
