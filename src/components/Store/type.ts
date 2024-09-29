import { UPDATE_ADDRESS_DIRECTORY } from '@/components/Store/constants';
import { IAddressDirectory, ICart, IFilter, IFilters, IProduct, ICustomer } from '@/models';

export type IInitState = {
  carts: ICart[];
  customers: ICustomer[];
  profile: ICustomer;
  filter: IFilters;
  addressDirectory: IAddressDirectory[];
};

export type IAction = {
  type: string;
  payload?:
    | ICart[]
    | ICart
    | ICustomer[]
    | ICustomer
    | IFilter
    | string
    | IProduct
    | IAddressDirectory[]
    | IAddressDirectory;
};
