import { HiOutlineUser, HiOutlineLocationMarker, HiOutlineEye } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegBell, FaRegStar } from 'react-icons/fa';
import { MdOutlineDiscount } from 'react-icons/md';

const MENU_LIST = [
  { id: 'account_info', icon: HiOutlineUser, label: 'Thông tin tài khoản' },
  { id: 'address', icon: HiOutlineLocationMarker, label: 'Số địa chỉ' },
  { id: 'order_management', icon: BsBoxSeam, label: 'Quản lý đơn hàng' },
  { id: 'notifications', icon: FaRegBell, label: 'Thông báo' },
  { id: 'discount_code', icon: MdOutlineDiscount, label: 'Mã giảm giá' },
  { id: 'membership', icon: FaRegStar, label: 'Thành viên' },
  { id: 'viewed_products', icon: HiOutlineEye, label: 'Sản phẩm đã xem' },
];

export { MENU_LIST };
