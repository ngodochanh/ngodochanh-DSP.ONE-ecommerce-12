import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const permissionApi = {
  /**
   * Lấy danh sách tất cả các quyền (permissions).
   * @returns {Promise} - Promise chứa danh sách quyền.
   */
  getPermissions: () => {
    return useApiGet(API_ROUTE_CONFIG.permissions.getPermissions); // Gọi hàm useApiGet để lấy danh sách quyền.
  },

  /**
   * Tạo một quyền mới.
   * @param {Object} data - Dữ liệu của quyền mới.
   * @returns {Promise} - Promise chứa thông tin quyền đã được tạo.
   */
  createPermission: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.permissions.createPermission, data); // Gọi hàm useApiPost để tạo quyền mới.
  },

  /**
   * Lấy thông tin quyền theo ID.
   * @param {string} id - ID của quyền.
   * @returns {Promise} - Promise chứa thông tin quyền.
   */
  getPermissionById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.permissions.getPermissionById(id)); // Gọi hàm useApiGet để lấy thông tin quyền theo ID.
  },

  /**
   * Cập nhật thông tin quyền theo ID.
   * @param {string} id - ID của quyền cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin quyền đã được cập nhật.
   */
  updatePermission: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.permissions.updatePermission(id), data); // Gọi hàm useApiPut để cập nhật thông tin quyền.
  },

  /**
   * Xóa quyền theo ID.
   * @param {string} id - ID của quyền cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deletePermission: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.permissions.deletePermission(id)); // Gọi hàm useApiDelete để xóa quyền.
  },

  /**
   * Xóa quyền theo ID một cách vĩnh viễn.
   * @param {string} id - ID của quyền cần xóa vĩnh viễn.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  permanentDeletePermission: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.permissions.permanentDeletePermission(id)); // Gọi hàm useApiDelete để xóa quyền một cách vĩnh viễn.
  },

  /**
   * Khôi phục quyền theo ID.
   * @param {string} id - ID của quyền cần khôi phục.
   * @param {Object} data - Dữ liệu quyền mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về quyền đã được khôi phục.
   */
  restorePermission: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.permissions.restorePermission(id), data); // Gọi hàm useApiPut để khôi phục quyền.
  },
};

export default permissionApi;
