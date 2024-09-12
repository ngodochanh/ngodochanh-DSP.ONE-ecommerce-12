import { InitStateType } from '@/app/[locale]/product/type';
import { IoMdStopwatch } from 'react-icons/io';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineDiscount } from 'react-icons/md';
import { LuShieldCheck } from 'react-icons/lu';

import { COLOR_LIST, GENDER_LIST, SIZE_LIST } from '@/constantsProduct';

const RESET_FILTER = 'reset_filter';
const SET_PRODUCTS = 'set_products';
const PRODUCTS_GENDER = 'products_gender';
const PRODUCTS_COLOR = 'products_color';
const PRODUCTS_SIZE = 'products_size';
const PRODUCTS_PRICE = 'products_price';
const DELETE_PRODUCTS_GENDER = 'delete_products_gender';
const DELETE_PRODUCTS_COLOR = 'delete_products_color';
const DELETE_PRODUCTS_SIZE = 'delete_products_size';
const DELETE_PRODUCTS_PRICE = 'delete_products_price';

const KEY_PRODUCT_FILTER = {
  gender: 'gender',
  color: 'color',
  size: 'size',
  price: 'price',
};

const PRICE_LIST = {
  p_below_350k: 'below-350k',
  p_350k_to_750k: '350k-to-750k',
  p_above_750k: 'above-750k',
};

const PRODUCT_FILTER_LIST = [
  {
    id: KEY_PRODUCT_FILTER.gender,
    type: 'checkbox',
    title: 'Giới tính',
    children: [
      {
        label: GENDER_LIST.male.label,
        value: GENDER_LIST.male.value,
      },
      {
        label: GENDER_LIST.female.label,
        value: GENDER_LIST.female.value,
      },
    ],
  },
  {
    id: KEY_PRODUCT_FILTER.color,
    type: 'color',
    title: 'Màu sắc',
    children: [
      {
        label: 'Đen',
        value: COLOR_LIST.black,
      },
      {
        label: 'Đỏ',
        value: COLOR_LIST.red,
      },
      {
        label: 'Vàng',
        value: COLOR_LIST.yellow,
      },
      {
        label: 'Cam',
        value: COLOR_LIST.orange,
      },
      {
        label: 'Xám',
        value: COLOR_LIST.gray,
      },
      {
        label: 'Hồng',
        value: COLOR_LIST.pink,
      },
      {
        label: 'Tím',
        value: COLOR_LIST.purple,
      },
      {
        label: 'Nâu',
        value: COLOR_LIST.brown,
      },
      {
        label: 'Trắng',
        value: COLOR_LIST.white,
      },
      {
        label: 'Khác',
        value: COLOR_LIST.other,
      },
    ],
  },
  {
    id: KEY_PRODUCT_FILTER.size,
    type: 'size',
    title: 'Kích thước',
    children: [
      {
        label: 's',
        value: SIZE_LIST.small,
      },
      {
        label: 'm',
        value: SIZE_LIST.medium,
      },
      {
        label: 'l',
        value: SIZE_LIST.large,
      },
      {
        label: 'xl',
        value: SIZE_LIST.extra_large,
      },
      {
        label: '2xl',
        value: SIZE_LIST.double_extra_large,
      },
      {
        label: '3xl',
        value: SIZE_LIST.triple_extra_large,
      },
      {
        label: '4xl',
        value: SIZE_LIST.quadruple_extra_large,
      },
      {
        label: '5xl',
        value: SIZE_LIST.quintuple_extra_large,
      },
    ],
  },
  {
    id: KEY_PRODUCT_FILTER.price,
    type: 'checkbox',
    title: 'Theo giá',
    children: [
      {
        label: 'Dưới 350.000 đ',
        value: PRICE_LIST.p_below_350k,
      },
      {
        label: 'Từ 350.000 đ - 750.000 đ',
        value: PRICE_LIST.p_350k_to_750k,
      },
      {
        label: 'Trên 750.000 đ',
        value: PRICE_LIST.p_above_750k,
      },
    ],
  },
];

const INITIAL_STATE: InitStateType = {
  filter: {
    gender: [],
    color: [],
    size: [],
    price: [],
  },
};

const PER_PAGE = 9;

const PRODUCT_SERVICE_LIST = [
  {
    id: 'c',
    description: 'Miễn phí vận chuyển: Đơn hàng từ 498k',
    Icon: TbTruckDelivery,
  },
  {
    id: 'd',
    description: 'Giao hàng: Từ 3 - 5 ngày trên cả nước',
    Icon: IoMdStopwatch,
  },
  {
    id: 'a',
    description: 'Sử dụng mã giảm giá ở bước thanh toán',
    Icon: MdOutlineDiscount,
  },
  {
    id: 'b',
    description: 'Thông tin bảo mật và mã hoá',
    Icon: LuShieldCheck,
  },
];

export {
  RESET_FILTER,
  PRICE_LIST,
  SET_PRODUCTS,
  PRODUCTS_GENDER,
  PRODUCTS_COLOR,
  PRODUCTS_SIZE,
  PRODUCTS_PRICE,
  DELETE_PRODUCTS_GENDER,
  DELETE_PRODUCTS_COLOR,
  DELETE_PRODUCTS_SIZE,
  DELETE_PRODUCTS_PRICE,
  KEY_PRODUCT_FILTER,
  PRODUCT_FILTER_LIST,
  INITIAL_STATE,
  PER_PAGE,
  PRODUCT_SERVICE_LIST,
};
