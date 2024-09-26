const AUTH_LIST = [
  { id: 'login', label: 'Đăng nhập', path: process.env.LOGIN },
  { id: 'register', label: 'Đăng ký', path: process.env.REGISTER },
];

const ACCOUNT_LIST = [
  { id: 'profile', label: 'Hồ sơ', path: process.env.PROFILE },
  { id: 'logout', label: 'Đăng xuất' },
];

export { AUTH_LIST, ACCOUNT_LIST };
