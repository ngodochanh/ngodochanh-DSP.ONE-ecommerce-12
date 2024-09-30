import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const attributeGroupApi = {
  /**
   * Lấy danh sách tất cả các nhóm thuộc tính.
   * @returns {Promise} - Promise chứa danh sách các nhóm thuộc tính.
   */
  getAttributeGroups: () => {
    return useApiGet(API_ROUTE_CONFIG.attributes.getAttributeGroups); // Gọi hàm useApiGet để lấy danh sách các nhóm thuộc tính.
  },

  /**
   * Tạo một nhóm thuộc tính mới.
   * @param {Object} data - Dữ liệu của nhóm thuộc tính mới.
   * @returns {Promise} - Promise chứa thông tin nhóm thuộc tính đã được tạo.
   */
  createAttributeGroup: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.attributes.createAttributeGroup, data); // Gọi hàm useApiPost để tạo nhóm thuộc tính mới.
  },

  /**
   * Lấy thông tin nhóm thuộc tính theo ID.
   * @param {string} id - ID của nhóm thuộc tính.
   * @returns {Promise} - Promise chứa thông tin nhóm thuộc tính.
   */
  getAttributeGroupById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.attributes.getAttributeGroupById(id)); // Gọi hàm useApiGet để lấy thông tin nhóm thuộc tính theo ID.
  },

  /**
   * Cập nhật thông tin nhóm thuộc tính theo ID.
   * @param {string} id - ID của nhóm thuộc tính cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin nhóm thuộc tính đã được cập nhật.
   */
  updateAttributeGroup: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.attributes.updateAttributeGroup(id), data); // Gọi hàm useApiPut để cập nhật thông tin nhóm thuộc tính.
  },

  /**
   * Xóa nhóm thuộc tính theo ID.
   * @param {string} id - ID của nhóm thuộc tính cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteAttributeGroup: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.attributes.deleteAttributeGroup(id)); // Gọi hàm useApiDelete để xóa nhóm thuộc tính.
  },

  /**
   * Khôi phục nhóm thuộc tính đã bị xóa tạm thời theo ID.
   * @param {string} id - ID của nhóm thuộc tính cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về nhóm thuộc tính đã được khôi phục.
   */
  restoreAttributeGroup: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.attributes.restoreAttributeGroup(id)); // Gọi hàm useApiGet để khôi phục nhóm thuộc tính đã bị xóa tạm thời.
  },
};

export default attributeGroupApi;
