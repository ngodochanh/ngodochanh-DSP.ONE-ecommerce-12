'use client';

import { ReactNode, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import Context from './Context';

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export default Provider;
