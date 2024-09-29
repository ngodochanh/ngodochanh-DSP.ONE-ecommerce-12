export type ICustomerCore = {
  id: string;
  fullname: string;
  phone: string;
  password: string;
};

export type ICustomer = ICustomerCore & {
  image?: string;
  nickname?: string;
  birthday?: Date | null;
  gender?: string;
  email: string;
  score?: number;
};
