import { UPDATE_ADDRESS_DIRECTORY } from '@/components/Store/constants';
import { IAddressDirectory, ICart, IFilter, IFilters, IProduct, TCustomer } from '@/models';

export type IInitState = {
  carts: ICart[];
  customers: TCustomer[];
  profile: TCustomer;
  filter: IFilters;
  addressDirectory: IAddressDirectory[];
};

export type IAction = {
  type: string;
  payload?:
    | ICart[]
    | ICart
    | TCustomer[]
    | TCustomer
    | IFilter
    | string
    | IProduct
    | IAddressDirectory[]
    | IAddressDirectory;
};
