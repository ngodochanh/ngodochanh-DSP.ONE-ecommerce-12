'use client';

import { ReactNode, useEffect, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import Context from './Context';
import { actions } from '@/components/Store';
import { CUSTOMER_LIST } from '@/data';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(actions.setCustomers(CUSTOMER_LIST));
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export default Provider;
