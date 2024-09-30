import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const userApi = {
  /**
   * Lấy danh sách tất cả người dùng.
   * @returns {Promise} - Promise chứa danh sách người dùng.
   */
  getUsers: () => {
    return useApiGet(API_ROUTE_CONFIG.users.getUsers); // Gọi hàm useApiGet để lấy danh sách người dùng.
  },

  /**
   * Tạo một người dùng mới.
   * @param {Object} data - Dữ liệu của người dùng cần tạo.
   * @returns {Promise} - Promise chứa thông tin người dùng đã được tạo.
   */
  createUser: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.users.createUser, data); // Gọi hàm useApiPost để tạo người dùng mới.
  },

  /**
   * Lấy thông tin người dùng theo ID.
   * @param {string} id - ID của người dùng.
   * @returns {Promise} - Promise chứa thông tin người dùng.
   */
  getUserById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.users.getUserById(id)); // Gọi hàm useApiGet để lấy thông tin người dùng theo ID.
  },

  /**
   * Cập nhật thông tin một người dùng theo ID.
   * @param {string} id - ID của người dùng cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin người dùng đã được cập nhật.
   */
  updateUser: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.users.updateUser(id), data); // Gọi hàm useApiPut để cập nhật thông tin người dùng.
  },

  /**
   * Xóa một người dùng theo ID.
   * @param {string} id - ID của người dùng cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteUser: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.users.deleteUser(id)); // Gọi hàm useApiDelete để xóa người dùng.
  },

  /**
   * Lấy thông tin người dùng theo username.
   * @param {string} username - Tên người dùng.
   * @returns {Promise} - Promise chứa thông tin người dùng.
   */
  getUserByUsername: (username: string) => {
    return useApiGet(API_ROUTE_CONFIG.users.getUserByUsername(username)); // Gọi hàm useApiGet để lấy thông tin người dùng theo username.
  },

  /**
   * Lấy thông tin profile của người dùng hiện tại.
   * @returns {Promise} - Promise chứa thông tin profile người dùng.
   */
  getUserProfile: () => {
    return useApiGet(API_ROUTE_CONFIG.users.getUserProfile); // Gọi hàm useApiGet để lấy thông tin profile của người dùng.
  },

  /**
   * Cập nhật profile của người dùng hiện tại.
   * @param {Object} data - Dữ liệu mới để cập nhật profile.
   * @returns {Promise} - Promise chứa thông tin profile đã được cập nhật.
   */
  updateUserProfile: (data: any) => {
    return useApiPut(API_ROUTE_CONFIG.users.updateUserProfile, data); // Gọi hàm useApiPut để cập nhật profile người dùng.
  },

  /**
   * Đăng nhập người dùng vào hệ thống.
   * @param {Object} data - Dữ liệu đăng nhập (username, password).
   * @returns {Promise} - Promise chứa thông tin người dùng đã đăng nhập.
   */
  loginUser: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.users.loginUser, data); // Gọi hàm useApiPost để đăng nhập người dùng.
  },

  /**
   * Đăng xuất người dùng hiện tại.
   * @returns {Promise} - Promise chứa thông tin về kết quả đăng xuất.
   */
  logoutUser: () => {
    return useApiGet(API_ROUTE_CONFIG.users.logoutUser); // Gọi hàm useApiGet để đăng xuất người dùng.
  },

  /**
   * Khôi phục profile của người dùng đã bị xóa.
   * @param {string} id - ID của người dùng cần khôi phục.
   * @param {Object} data - Dữ liệu người dùng mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restoreUserProfile: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.users.restoreUserProfile(id), data); // Gọi hàm useApiPut để khôi phục profile người dùng.
  },
};

export default userApi;
