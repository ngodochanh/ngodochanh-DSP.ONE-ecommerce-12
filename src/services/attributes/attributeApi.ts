import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const attributeApi = {
  /**
   * Lấy danh sách tất cả các thuộc tính.
   * @returns {Promise} - Promise chứa danh sách các thuộc tính.
   */
  getAttributes: () => {
    return useApiGet(API_ROUTE_CONFIG.attributes.getAttributes); // Gọi hàm useApiGet để lấy danh sách các thuộc tính.
  },

  /**
   * Tạo một thuộc tính mới.
   * @param {Object} data - Dữ liệu của thuộc tính mới.
   * @returns {Promise} - Promise chứa thông tin thuộc tính đã được tạo.
   */
  createAttribute: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.attributes.createAttribute, data); // Gọi hàm useApiPost để tạo thuộc tính mới.
  },

  /**
   * Lấy thông tin thuộc tính theo ID.
   * @param {string} id - ID của thuộc tính.
   * @returns {Promise} - Promise chứa thông tin thuộc tính.
   */
  getAttributeById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.attributes.getAttributeById(id)); // Gọi hàm useApiGet để lấy thông tin thuộc tính theo ID.
  },

  /**
   * Cập nhật thông tin thuộc tính theo ID.
   * @param {string} id - ID của thuộc tính cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin thuộc tính đã được cập nhật.
   */
  updateAttribute: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.attributes.updateAttribute(id), data); // Gọi hàm useApiPut để cập nhật thông tin thuộc tính.
  },

  /**
   * Xóa thuộc tính theo ID.
   * @param {string} id - ID của thuộc tính cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteAttribute: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.attributes.deleteAttribute(id)); // Gọi hàm useApiDelete để xóa thuộc tính.
  },

  /**
   * Khôi phục thuộc tính đã bị xóa tạm thời theo ID.
   * @param {string} id - ID của thuộc tính cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về thuộc tính đã được khôi phục.
   */
  restoreAttribute: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.attributes.restoreAttribute(id)); // Gọi hàm useApiGet để khôi phục thuộc tính đã bị xóa tạm thời.
  },
};

export default attributeApi;
