import {
  ADD_CART,
  ADD_CUSTOMER,
  DELETE_CART,
  DELETE_PRODUCTS_COLOR,
  DELETE_PRODUCTS_GENDER,
  DELETE_PRODUCTS_PRICE,
  DELETE_PRODUCTS_SIZE,
  PRODUCTS_COLOR,
  PRODUCTS_GENDER,
  PRODUCTS_PRICE,
  PRODUCTS_SIZE,
  RESET_CART,
  RESET_FILTER,
  SET_PROFILE,
  SET_CART,
  SET_CUSTOMERS,
  UPDATE_PROFILE,
} from './constants';

import { ICart, IFilter, TCustomer } from '@/models';

const setProfile = (payload: TCustomer) => {
  return {
    type: SET_PROFILE,
    payload,
  };
};

//
const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

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
const setCustomers = (payload: TCustomer[]) => {
  return {
    type: SET_CUSTOMERS,
    payload,
  };
};

const addCustomer = (payload: TCustomer) => {
  return {
    type: ADD_CUSTOMER,
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
  setProfile,
  //
  deleteCart,
  setCart,
  addCart,
  resetCart,
  //
  setCustomers,
  addCustomer,
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
