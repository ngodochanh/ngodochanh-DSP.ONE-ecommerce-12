'use client';
import { IAction, IInitState } from './type';
import { initialState } from './reducer';

import { createContext, Dispatch } from 'react';

const Context = createContext<{ state: IInitState; dispatch: Dispatch<IAction> }>({
  state: initialState,
  dispatch: () => null,
});

export default Context;
