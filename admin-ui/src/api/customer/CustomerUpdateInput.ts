import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstNAme?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
