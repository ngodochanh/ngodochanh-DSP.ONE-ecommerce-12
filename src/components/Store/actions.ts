import {
  ADD_CART,
  DELETE_CART,
  DELETE_PRODUCTS_COLOR,
  DELETE_PRODUCTS_GENDER,
  DELETE_PRODUCTS_PRICE,
  DELETE_PRODUCTS_SIZE,
  PRODUCTS_COLOR,
  PRODUCTS_GENDER,
  PRODUCTS_PRICE,
  PRODUCTS_SIZE,
  RESET_FILTER,
  SET_CART,
  SET_PRODUCTS,
  UPDATE_USER,
} from './constants';

import { ICart, TCustomer, IFilter, IProduct } from '@/types';

const addCart = (payload: ICart) => {
  return {
    type: ADD_CART,
    payload,
  };
};

const deleteCart = (payload: string) => {
  return {
    type: DELETE_CART,
    payload,
  };
};

const setCart = (payload: ICart[]) => {
  return {
    type: SET_CART,
    payload,
  };
};

//
const updateUser = (payload: TCustomer) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

//
const setProducts = (payload: IProduct[]) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

//
const toggleGender = (payload: IFilter) => {
  return {
    type: PRODUCTS_GENDER,
    payload,
  };
};

const toggleColor = (payload: IFilter) => {
  return {
    type: PRODUCTS_COLOR,
    payload,
  };
};

const toggleSize = (payload: IFilter) => {
  return {
    type: PRODUCTS_SIZE,
    payload,
  };
};

const togglePrice = (payload: IFilter) => {
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
  deleteCart,
  setCart,
  addCart,
  //
  updateUser,
  //
  setProducts,
  //
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
