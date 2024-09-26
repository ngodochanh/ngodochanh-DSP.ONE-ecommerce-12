import { HiOutlineUser, HiOutlineLocationMarker, HiOutlineEye } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegBell, FaRegStar } from 'react-icons/fa';
import { MdOutlineDiscount } from 'react-icons/md';

const MENU_LIST = [
  { id: 'profile', icon: HiOutlineUser, label: 'Thông tin tài khoản', path: process.env.PROFILE! },
  { id: 'address', icon: HiOutlineLocationMarker, label: 'Số địa chỉ', path: process.env.ADDRESS! },
  { id: 'order_management', icon: BsBoxSeam, label: 'Quản lý đơn hàng', path: process.env.PROFILE! },
  { id: 'notifications', icon: FaRegBell, label: 'Thông báo', path: process.env.PROFILE! },
  { id: 'discount_code', icon: MdOutlineDiscount, label: 'Mã giảm giá', path: process.env.PROFILE! },
  { id: 'membership', icon: FaRegStar, label: 'Thành viên', path: process.env.PROFILE! },
  { id: 'viewed_products', icon: HiOutlineEye, label: 'Sản phẩm đã xem', path: process.env.PROFILE! },
];

export { MENU_LIST };
