import { ICart, IFilter, IFilters, IProduct, TCustomer } from '@/models';
import { TCustomerInfoSchema } from '@/schemas';

export type IInitState = {
  carts: ICart[];
  customers: TCustomer[];
  customer: TCustomerInfoSchema;
  filter: IFilters;
};

export type IAction = {
  type: string;
  payload?: ICart[] | ICart | TCustomerInfoSchema | TCustomer[] | TCustomer | IFilter | string | IProduct;
};
