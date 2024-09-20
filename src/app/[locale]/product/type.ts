import { IFilter } from '@/models';

export type IFuncHandleChangeFilter = (keyProductFilter: string, value: IFilter) => void;

export type ProductFilterMenuTypeProps = {
  keyProductFilter: string;
  productFilterList: IFilter[];
  onChangeFilter: IFuncHandleChangeFilter;
};
