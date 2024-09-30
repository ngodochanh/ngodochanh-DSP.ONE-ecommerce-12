import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const rolePermissionApi = {
  /**
   * Lấy danh sách tất cả các quyền của vai trò (role permissions).
   * @returns {Promise} - Promise chứa danh sách các quyền vai trò.
   */
  getRolePermissions: () => {
    return useApiGet(API_ROUTE_CONFIG.roles.getRolePermissions); // Gọi hàm useApiGet để lấy danh sách các quyền vai trò.
  },

  /**
   * Tạo một quyền vai trò mới.
   * @param {Object} data - Dữ liệu của quyền vai trò mới.
   * @returns {Promise} - Promise chứa thông tin quyền vai trò đã được tạo.
   */
  createRolePermission: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.roles.createRolePermission, data); // Gọi hàm useApiPost để tạo quyền vai trò mới.
  },

  /**
   * Lấy thông tin quyền vai trò theo ID.
   * @param {string} id - ID của quyền vai trò.
   * @returns {Promise} - Promise chứa thông tin quyền vai trò.
   */
  getRolePermissionById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.roles.getRolePermissionById(id)); // Gọi hàm useApiGet để lấy thông tin quyền vai trò theo ID.
  },

  /**
   * Cập nhật thông tin quyền vai trò theo ID.
   * @param {string} id - ID của quyền vai trò cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin quyền vai trò đã được cập nhật.
   */
  updateRolePermission: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.roles.updateRolePermission(id), data); // Gọi hàm useApiPut để cập nhật thông tin quyền vai trò.
  },

  /**
   * Xóa quyền vai trò theo ID.
   * @param {string} id - ID của quyền vai trò cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteRolePermission: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.roles.deleteRolePermission(id)); // Gọi hàm useApiDelete để xóa quyền vai trò.
  },
};

export default rolePermissionApi;
