import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const roleApi = {
  /**
   * Lấy danh sách tất cả các vai trò (roles).
   * @returns {Promise} - Promise chứa danh sách các vai trò.
   */
  getRoles: () => {
    return useApiGet(API_ROUTE_CONFIG.roles.getRoles); // Gọi hàm useApiGet để lấy danh sách các vai trò.
  },

  /**
   * Tạo một vai trò mới.
   * @param {Object} data - Dữ liệu của vai trò mới.
   * @returns {Promise} - Promise chứa thông tin vai trò đã được tạo.
   */
  createRole: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.roles.createRole, data); // Gọi hàm useApiPost để tạo vai trò mới.
  },

  /**
   * Lấy thông tin vai trò theo ID.
   * @param {string} id - ID của vai trò.
   * @returns {Promise} - Promise chứa thông tin vai trò.
   */
  getRoleById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.roles.getRoleById(id)); // Gọi hàm useApiGet để lấy thông tin vai trò theo ID.
  },

  /**
   * Cập nhật thông tin vai trò theo ID.
   * @param {string} id - ID của vai trò cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin vai trò đã được cập nhật.
   */
  updateRole: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.roles.updateRole(id), data); // Gọi hàm useApiPut để cập nhật thông tin vai trò.
  },

  /**
   * Xóa vai trò theo ID.
   * @param {string} id - ID của vai trò cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteRole: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.roles.deleteRole(id)); // Gọi hàm useApiDelete để xóa vai trò.
  },

  /**
   * Xóa vai trò theo ID một cách vĩnh viễn.
   * @param {string} id - ID của vai trò cần xóa vĩnh viễn.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  permanentDeleteRole: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.roles.permanentDeleteRole(id)); // Gọi hàm useApiDelete để xóa vai trò một cách vĩnh viễn.
  },

  /**
   * Khôi phục vai trò theo ID.
   * @param {string} id - ID của vai trò cần khôi phục.
   * @param {Object} data - Dữ liệu vai trò mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về vai trò đã được khôi phục.
   */
  restoreRole: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.roles.restoreRole(id), data); // Gọi hàm useApiPut để khôi phục vai trò.
  },
};

export default roleApi;
