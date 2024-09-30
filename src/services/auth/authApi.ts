import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet } from '@/services/useApiRequest';

const authApi = {
  /**
   * Đăng nhập người dùng bằng tài khoản Google.
   * @returns {Promise} - Promise chứa thông tin người dùng đã đăng nhập.
   */
  loginWithGoogle: () => {
    return useApiGet(API_ROUTE_CONFIG.auth.loginWithGoogle); // Gọi hàm useApiGet để đăng nhập người dùng bằng tài khoản Google.
  },

  /**
   * Kết nối tài khoản Google với người dùng hiện tại.
   * @returns {Promise} - Promise chứa thông tin kết nối thành công.
   */
  connectGoogleAccount: () => {
    return useApiGet(API_ROUTE_CONFIG.auth.connectGoogleAccount); // Gọi hàm useApiGet để kết nối tài khoản Google với người dùng hiện tại.
  },
};

export default authApi;
