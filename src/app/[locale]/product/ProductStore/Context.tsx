'use client';

import { initialState } from '@/app/[locale]/product/ProductStore/reducer';
import { ActionType, InitStateType } from '@/app/[locale]/product/type';
import { createContext, Dispatch } from 'react';

const Context = createContext<{ state: InitStateType; dispatch: Dispatch<ActionType> }>({
  state: initialState,
  dispatch: () => null,
});

export default Context;
