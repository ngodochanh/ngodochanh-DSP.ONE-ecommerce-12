import { ICart, TCustomer } from '@/models';
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
  SET_CART,
  SET_CUSTOMERS,
  SET_PRODUCTS,
  UPDATE_USER,
} from './constants';
import { IAction, IInitState } from './type';

const initialState: IInitState = {
  carts: [],
  customers: [],
  customer: {
    fullname: 'Nguyễn Hữu Tiến',
    phone: '0901223344',
    address: '388 J, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ',
  },
  filter: {
    gender: [],
    color: [],
    size: [],
    price: [],
  },
};

const reducer = (state: IInitState, action: IAction): IInitState => {
  const { type, payload } = action;

  switch (type) {
    case RESET_CART:
      return {
        ...state,
        carts: initialState.carts,
      };
    case ADD_CART:
      if (typeof payload === 'object' && payload !== null) {
        return {
          ...state,
          carts: [{ ...payload } as ICart, ...state.carts],
        };
      }
      return state;

    case DELETE_CART:
      if (typeof payload === 'string' && payload !== null) {
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== payload),
        };
      }
      return state;

    case SET_CART:
      return {
        ...state,
        carts: payload as ICart[],
      };
    //
    case UPDATE_USER:
      if (
        typeof payload === 'object' &&
        payload !== null &&
        'fullname' in payload &&
        'phone' in payload &&
        'address' in payload
      ) {
        return {
          ...state,
          customer: {
            ...payload,
          },
        };
      }

      return state;
    case SET_CUSTOMERS:
      return {
        ...state,
        customers: payload as TCustomer[],
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, payload as TCustomer],
      };
    //
    case RESET_FILTER:
      return {
        ...state,
        filter: { ...initialState.filter },
      };
    case SET_PRODUCTS:
      if (typeof payload === 'object' && payload !== null && 'value' in payload) {
        return {
          ...state,
          filter: {
            ...state.filter,
            gender: [...state.filter.gender, payload],
          },
        };
      }
      return state;
    case PRODUCTS_GENDER: {
      if (typeof payload === 'object' && payload !== null && 'value' in payload) {
        if (state.filter.gender.some((item) => item.value === payload.value)) {
          return {
            ...state,
            filter: {
              ...state.filter,
              gender: state.filter.gender.filter((item) => item.value !== payload.value),
            },
          };
        }

        return {
          ...state,
          filter: {
            ...state.filter,
            gender: [...state.filter.gender, payload],
          },
        };
      }

      return state;
    }

    case PRODUCTS_COLOR: {
      if (typeof payload === 'object' && payload !== null && 'value' in payload) {
        if (state.filter.color.some((item) => item.value === payload.value)) {
          return {
            ...state,
            filter: {
              ...state.filter,
              color: state.filter.color.filter((item) => item.value !== payload.value),
            },
          };
        }

        return {
          ...state,
          filter: {
            ...state.filter,
            color: [...state.filter.color, payload],
          },
        };
      }

      return state;
    }

    case PRODUCTS_SIZE: {
      if (typeof payload === 'object' && payload !== null && 'value' in payload) {
        if (state.filter.size.some((item) => item.value === payload.value)) {
          return {
            ...state,
            filter: {
              ...state.filter,
              size: state.filter.size.filter((item) => item.value !== payload.value),
            },
          };
        }

        return {
          ...state,
          filter: {
            ...state.filter,
            size: [...state.filter.size, payload],
          },
        };
      }

      return state;
    }

    case PRODUCTS_PRICE: {
      if (typeof payload === 'object' && payload !== null && 'value' in payload) {
        if (state.filter.price.some((item) => item.value === payload.value)) {
          return {
            ...state,
            filter: {
              ...state.filter,
              price: state.filter.price.filter((item) => item.value !== payload.value),
            },
          };
        }

        return {
          ...state,
          filter: {
            ...state.filter,
            price: [...state.filter.price, payload],
          },
        };
      }

      return state;
    }

    case DELETE_PRODUCTS_GENDER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          gender: state.filter.gender.filter((item) => item.value !== payload),
        },
      };
    }

    case DELETE_PRODUCTS_COLOR: {
      return {
        ...state,
        filter: {
          ...state.filter,
          color: state.filter.color.filter((item) => item.value !== payload),
        },
      };
    }

    case DELETE_PRODUCTS_SIZE: {
      return {
        ...state,
        filter: {
          ...state.filter,
          size: state.filter.size.filter((item) => item.value !== payload),
        },
      };
    }

    case DELETE_PRODUCTS_PRICE: {
      return {
        ...state,
        filter: {
          ...state.filter,
          price: state.filter.price.filter((item) => item.value !== payload),
        },
      };
    }

    default:
      return state;
  }
};

export { initialState };
export default reducer;
