import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SmartContractWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  ownerId?: StringNullableFilter;
  status?: "Option1";
};
