import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const userRoleApi = {
  /**
   * Lấy danh sách tất cả các vai trò người dùng.
   * @returns {Promise} - Promise chứa danh sách các vai trò người dùng.
   */
  getUserRoles: () => {
    return useApiGet(API_ROUTE_CONFIG.users.getUserRoles); // Gọi hàm useApiGet để lấy danh sách các vai trò người dùng.
  },

  /**
   * Tạo một vai trò người dùng mới.
   * @param {Object} data - Dữ liệu của vai trò người dùng mới.
   * @returns {Promise} - Promise chứa thông tin vai trò người dùng đã được tạo.
   */
  createUserRole: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.users.createUserRole, data); // Gọi hàm useApiPost để tạo vai trò người dùng mới.
  },

  /**
   * Lấy thông tin vai trò người dùng theo ID.
   * @param {string} id - ID của vai trò người dùng.
   * @returns {Promise} - Promise chứa thông tin vai trò người dùng.
   */
  getUserRoleById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.users.getUserRoleById(id)); // Gọi hàm useApiGet để lấy thông tin vai trò người dùng theo ID.
  },

  /**
   * Cập nhật thông tin vai trò người dùng theo ID.
   * @param {string} id - ID của vai trò người dùng cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin vai trò người dùng đã được cập nhật.
   */
  updateUserRole: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.users.updateUserRole(id), data); // Gọi hàm useApiPut để cập nhật thông tin vai trò người dùng.
  },

  /**
   * Xóa vai trò người dùng theo ID.
   * @param {string} id - ID của vai trò người dùng cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteUserRole: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.users.deleteUserRole(id)); // Gọi hàm useApiDelete để xóa vai trò người dùng.
  },

  /**
   * Xóa vĩnh viễn vai trò người dùng theo ID.
   * @param {string} id - ID của vai trò người dùng cần xóa vĩnh viễn.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  permanentDeleteUserRole: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.users.permanentDeleteUserRole(id)); // Gọi hàm useApiDelete để xóa vĩnh viễn vai trò người dùng.
  },

  /**
   * Khôi phục vai trò người dùng theo ID.
   * @param {string} id - ID của vai trò người dùng cần khôi phục.
   * @param {Object} data - Dữ liệu vai trò người dùng mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về vai trò người dùng đã được khôi phục.
   */
  restoreUserRole: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.users.restoreUserRole(id), data);
  },
};

export default userRoleApi;
