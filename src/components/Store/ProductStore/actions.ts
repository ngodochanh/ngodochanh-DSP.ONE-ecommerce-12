import {
  DELETE_PRODUCTS_COLOR,
  DELETE_PRODUCTS_GENDER,
  DELETE_PRODUCTS_PRICE,
  DELETE_PRODUCTS_SIZE,
  PRODUCTS_COLOR,
  PRODUCTS_GENDER,
  PRODUCTS_PRICE,
  PRODUCTS_SIZE,
  RESET_FILTER,
  SET_PRODUCTS,
} from './constants';
import { ProductFilterMenuType } from '@/app/[locale]/product/type';
import { ProductType } from '@/type';

const setProducts = (payload: ProductType[]) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

const toggleGender = (payload: ProductFilterMenuType) => {
  return {
    type: PRODUCTS_GENDER,
    payload,
  };
};

const toggleColor = (payload: ProductFilterMenuType) => {
  return {
    type: PRODUCTS_COLOR,
    payload,
  };
};

const toggleSize = (payload: ProductFilterMenuType) => {
  return {
    type: PRODUCTS_SIZE,
    payload,
  };
};

const togglePrice = (payload: ProductFilterMenuType) => {
  return {
    type: PRODUCTS_PRICE,
    payload,
  };
};

const deleteGender = (payload: string) => {
  return {
    type: DELETE_PRODUCTS_GENDER,
    payload,
  };
};

const deleteColor = (payload: string) => {
  return {
    type: DELETE_PRODUCTS_COLOR,
    payload,
  };
};

const deleteSize = (payload: string) => {
  return {
    type: DELETE_PRODUCTS_SIZE,
    payload,
  };
};

const deletePrice = (payload: string) => {
  return {
    type: DELETE_PRODUCTS_PRICE,
    payload,
  };
};

const resetFilter = () => {
  return {
    type: RESET_FILTER,
  };
};

export {
  setProducts,
  toggleGender,
  toggleColor,
  toggleSize,
  togglePrice,
  deleteGender,
  deleteColor,
  deleteSize,
  deletePrice,
  resetFilter,
};
