'use client';

import { initialState } from './reducer';
import { IAction, IInitState } from '@/type';
import { createContext, Dispatch } from 'react';

const Context = createContext<{ state: IInitState; dispatch: Dispatch<IAction> }>({
  state: initialState,
  dispatch: () => null,
});

export default Context;
