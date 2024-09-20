import { ICart, IFilter, IFilters, IProduct } from '@/types';
import { TCustomer, TCustomerTT } from '@/types/customer';

export type IInitState = {
  carts: ICart[];
  customers: TCustomerTT[];
  customer: TCustomer;
  filter: IFilters;
};

export type IAction = {
  type: string;
  payload?: ICart[] | ICart | TCustomer | TCustomerTT[] | TCustomerTT | IFilter | string | IProduct;
};
