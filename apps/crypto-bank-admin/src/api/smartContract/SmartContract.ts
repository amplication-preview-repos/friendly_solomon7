export type SmartContract = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  ownerId: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
