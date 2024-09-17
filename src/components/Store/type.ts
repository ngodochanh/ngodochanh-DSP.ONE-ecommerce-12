import { ICart, IFilter, IFilters, IProduct } from '@/types';
import { TCustomer } from '@/types/customer';

export type IInitState = {
  carts: ICart[];
  customer: TCustomer;
  filter: IFilters;
};

export type IAction = {
  type: string;
  payload?: ICart[] | ICart | TCustomer | IFilter | string | IProduct;
};
