import { ICart, IFilter, IFilters, IProduct } from '@/types';
import { TCustomer } from '@/types/customer';

export type IInitState = {
  cart: ICart[];
  customer: TCustomer;
  filter: IFilters;
};

export type IAction = {
  type: string;
  payload?: ICart[] | TCustomer | IFilter | string | IProduct;
};
