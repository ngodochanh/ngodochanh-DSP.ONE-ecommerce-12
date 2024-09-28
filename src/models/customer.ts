export type TCustomerCore = {
  id: string;
  fullname: string;
  phone: string;
  password: string;
};

export type TCustomer = TCustomerCore & {
  image?: string;
  nickname?: string;
  birthday?: Date | null;
  gender?: string;
  email: string;
  score?: number;
};
