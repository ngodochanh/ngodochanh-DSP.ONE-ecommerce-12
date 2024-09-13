import {
  DELETE_PRODUCTS_COLOR,
  DELETE_PRODUCTS_GENDER,
  DELETE_PRODUCTS_PRICE,
  DELETE_PRODUCTS_SIZE,
  PRODUCTS_COLOR,
  PRODUCTS_GENDER,
  PRODUCTS_PRICE,
  PRODUCTS_SIZE,
  RESET_FILTER,
  SET_PRODUCTS,
} from './constants';
import { ActionType, InitStateType } from '@/app/[locale]/product/type';

const initialState: InitStateType = {
  filter: {
    gender: [],
    color: [],
    size: [],
    price: [],
  },
};

const reducer = (state: InitStateType, action: ActionType): InitStateType => {
  const { type, payload } = action;

  switch (type) {
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
