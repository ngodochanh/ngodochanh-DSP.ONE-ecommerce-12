'use client';

import { ReactNode, useEffect, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import Context from './Context';
import { actions } from '@/components/Store';
import { ADDRESS_DIRECTORY, CUSTOMER_LIST } from '@/data';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(actions.setCustomers(CUSTOMER_LIST));
    // Lấy danh sách địa chỉ của người dùng đăng nhập
    const addressDirectory = ADDRESS_DIRECTORY.filter((item) => item.id_customer === state.profile.id);
    dispatch(actions.setAddressDirectoryList(addressDirectory));
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export default Provider;
