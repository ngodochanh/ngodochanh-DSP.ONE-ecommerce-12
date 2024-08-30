import { useContext } from 'react';
import Context from './Context';

export const useProductStore = () => {
  const { state, dispatch } = useContext(Context);

  return { state, dispatch };
};
