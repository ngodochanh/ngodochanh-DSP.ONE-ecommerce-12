import { IAddressDirectory, ICart, IFilter, TCustomer } from '@/models';
import {
  ADD_ADDRESS_DIRECTORY,
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
  SET_ADDRESS_DIRECTORY_LIST,
  SET_CART,
  SET_CUSTOMERS,
  SET_PROFILE,
  UPDATE_ADDRESS_DIRECTORY,
} from './constants';
import { IAction, IInitState } from './type';
import { CUSTOMER_LIST } from '@/data';

const initialState: IInitState = {
  carts: [],
  customers: [],
  profile: CUSTOMER_LIST[2],
  filter: {
    gender: [],
    color: [],
    size: [],
    price: [],
  },
  addressDirectory: [],
};

const reducer = (state: IInitState, action: IAction): IInitState => {
  const { type, payload } = action;

  switch (type) {
    case SET_ADDRESS_DIRECTORY_LIST:
      return {
        ...state,
        addressDirectory: payload as IAddressDirectory[],
      };

    case UPDATE_ADDRESS_DIRECTORY: {
      const updateAddressPayload = payload as IAddressDirectory;

      const updatedArray = state.addressDirectory.map((item) => {
        // Kiểm tra nếu item cần cập nhật
        const isSameAddress =
          item.id_customer === updateAddressPayload.id_customer && item.id === updateAddressPayload.id;

        if (isSameAddress) {
          return { ...updateAddressPayload }; // Trả về địa chỉ mới đã cập nhật
        }

        // Nếu payload đang active, thì chỉ có payload được active, các item khác bị vô hiệu hóa
        if (updateAddressPayload.isActive) {
          return { ...item, isActive: false }; // Tắt isActive cho các địa chỉ khác
        }

        return item; // Giữ nguyên các địa chỉ khác không liên quan
      });

      return {
        ...state,
        addressDirectory: updatedArray,
      };
    }

    case ADD_ADDRESS_DIRECTORY: {
      const addAddressPayload = payload as IAddressDirectory;

      // Nếu isActive là true, set tất cả isActive trong addressDirectory thành false
      const updatedAddressDirectory = addAddressPayload.isActive
        ? state.addressDirectory.map((item) => ({
            ...item,
            isActive: false,
          }))
        : state.addressDirectory;

      return {
        ...state,
        // Thêm payload vào mảng addressDirectory
        addressDirectory: [...updatedAddressDirectory, addAddressPayload],
      };
    }

    //
    case SET_PROFILE:
      return {
        ...state,
        profile: payload as TCustomer,
      };

    //
    case RESET_CART:
      return {
        ...state,
        carts: initialState.carts,
      };

    case ADD_CART:
      return {
        ...state,
        carts: [payload as ICart, ...state.carts],
      };

    case DELETE_CART:
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };

    case SET_CART:
      return {
        ...state,
        carts: payload as ICart[],
      };

    //
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

    case PRODUCTS_GENDER: {
      const productGenderFilterPayload = payload as IFilter;
      // Kiểm tra xem giới tính đã được chọn chưa
      if (state.filter.gender.some((item) => item.value === productGenderFilterPayload.value)) {
        return {
          ...state, // Giữ nguyên trạng thái hiện tại
          filter: {
            ...state.filter, // Giữ nguyên các bộ lọc khác
            // Loại bỏ giới tính khỏi mảng gender
            gender: state.filter.gender.filter((item) => item.value !== productGenderFilterPayload.value),
          },
        };
      }
      // Nếu chưa chọn, thêm giới tính vào mảng gender
      return {
        ...state, // Giữ nguyên trạng thái hiện tại
        filter: {
          ...state.filter, // Giữ nguyên các bộ lọc khác
          // Thêm giới tính vào mảng gender
          gender: [...state.filter.gender, productGenderFilterPayload],
        },
      };
    }

    case PRODUCTS_COLOR: {
      const productColorFilterPayload = payload as IFilter;
      // Kiểm tra xem màu sắc đã được chọn chưa
      if (state.filter.color.some((item) => item.value === productColorFilterPayload.value)) {
        return {
          ...state, // Giữ nguyên trạng thái hiện tại
          filter: {
            ...state.filter, // Giữ nguyên các bộ lọc khác
            // Loại bỏ màu sắc khỏi mảng color
            color: state.filter.color.filter((item) => item.value !== productColorFilterPayload.value),
          },
        };
      }
      // Nếu chưa chọn, thêm màu sắc vào mảng color
      return {
        ...state, // Giữ nguyên trạng thái hiện tại
        filter: {
          ...state.filter, // Giữ nguyên các bộ lọc khác
          // Thêm màu sắc vào mảng color
          color: [...state.filter.color, productColorFilterPayload],
        },
      };
    }

    case PRODUCTS_SIZE: {
      const productSizeFilterPayload = payload as IFilter;
      // Kiểm tra xem kích thước đã được chọn chưa
      if (state.filter.size.some((item) => item.value === productSizeFilterPayload.value)) {
        return {
          ...state, // Giữ nguyên trạng thái hiện tại
          filter: {
            ...state.filter, // Giữ nguyên các bộ lọc khác
            // Loại bỏ kích thước khỏi mảng size
            size: state.filter.size.filter((item) => item.value !== productSizeFilterPayload.value),
          },
        };
      }
      // Nếu chưa chọn, thêm kích thước vào mảng size
      return {
        ...state, // Giữ nguyên trạng thái hiện tại
        filter: {
          ...state.filter, // Giữ nguyên các bộ lọc khác
          // Thêm kích thước vào mảng size
          size: [...state.filter.size, productSizeFilterPayload],
        },
      };
    }

    case PRODUCTS_PRICE: {
      const productPriceFilterPayload = payload as IFilter;
      // Kiểm tra xem giá được chọn chưa
      if (state.filter.price.some((item) => item.value === productPriceFilterPayload.value)) {
        return {
          ...state, // Giữ nguyên trạng thái hiện tại
          filter: {
            ...state.filter, // Giữ nguyên các bộ lọc khác
            // Loại bỏ giá khỏi mảng price
            price: state.filter.price.filter((item) => item.value !== productPriceFilterPayload.value),
          },
        };
      }
      // Nếu chưa chọn, thêm giá vào mảng price
      return {
        ...state, // Giữ nguyên trạng thái hiện tại
        filter: {
          ...state.filter, // Giữ nguyên các bộ lọc khác
          // Thêm giá vào mảng price
          price: [...state.filter.price, productPriceFilterPayload],
        },
      };
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
