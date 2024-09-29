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
  SET_ADDRESS_DIRECTORY_LIST,
  UPDATE_ADDRESS_DIRECTORY,
  ADD_ADDRESS_DIRECTORY,
} from './constants';

import { IAddressDirectory, ICart, IFilter, ICustomer } from '@/models';

const setAddressDirectoryList = (payload: IAddressDirectory[]) => {
  return {
    type: SET_ADDRESS_DIRECTORY_LIST,
    payload,
  };
};

const updateAddressDirectory = (payload: IAddressDirectory) => {
  return {
    type: UPDATE_ADDRESS_DIRECTORY,
    payload,
  };
};

const addAddressDirectory = (payload: IAddressDirectory) => {
  return {
    type: ADD_ADDRESS_DIRECTORY,
    payload,
  };
};

//
const setProfile = (payload: ICustomer) => {
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
const setCustomers = (payload: ICustomer[]) => {
  return {
    type: SET_CUSTOMERS,
    payload,
  };
};

const addCustomer = (payload: ICustomer) => {
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
  setAddressDirectoryList,
  updateAddressDirectory,
  addAddressDirectory,
  //
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
