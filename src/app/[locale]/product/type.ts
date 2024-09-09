import { ProductType } from '@/type';

export type ProductFilterMenuType = {
  label: string;
  value: string;
};

export type ProductFilterType = {
  type: string;
  title: string;
  children: ProductFilterMenuType[];
};

export type FuncHandleChangeType = (keyProductFilter: string, value: ProductFilterMenuType) => void;

export type ProductFilterMenuTypeProps = {
  keyProductFilter: string;
  productFilterList: ProductFilterMenuType[];
  handleChangeFilter: FuncHandleChangeType;
};

export type FilterType = {
  [key: string]: ProductFilterMenuType[];
};

export type InitStateType = {
  filter: FilterType;
};

export type ActionType = {
  type: string;
  payload?: ProductFilterMenuType | string | ProductType;
};
