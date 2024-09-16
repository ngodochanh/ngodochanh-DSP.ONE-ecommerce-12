import { FilterType, ProductFilterMenuType } from '@/app/[locale]/product/type';

//
export type ProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  gender: string[];
  color: string[];
  size: string[];
  slug: string;
  description: string;
  total_reviews: number;
  rating: number;
  category: string;
  isTrending: boolean;
};

export type ICart = {
  id: string;
  quantity: number;
};

//
export type IViewedProduct = {
  id: string; // ID của sản phẩm
  timestamp: number; // Thời gian xem sản phẩm
};

//
export type TCustomer = {
  fullname: string;
  phone: string;
  address: string;
};

//
export type IInitState = {
  cart: ICart[];
  customer: TCustomer;
  filter: FilterType;
};

export type IAction = {
  type: string;
  payload?: ICart[] | TCustomer | ProductFilterMenuType | string | ProductType;
};
