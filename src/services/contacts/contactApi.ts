import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const contactApi = {
  /**
   * Lấy danh sách tất cả các liên hệ.
   * @returns {Promise} - Promise chứa danh sách liên hệ.
   */
  getContacts: () => {
    return useApiGet(API_ROUTE_CONFIG.contacts.getContacts); // Gọi hàm useApiGet để lấy danh sách liên hệ.
  },

  /**
   * Tạo một liên hệ mới.
   * @param {Object} data - Dữ liệu của liên hệ mới.
   * @returns {Promise} - Promise chứa thông tin liên hệ đã được tạo.
   */
  createContact: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.contacts.createContact, data); // Gọi hàm useApiPost để tạo liên hệ mới.
  },

  /**
   * Lấy thông tin liên hệ theo ID.
   * @param {string} id - ID của liên hệ.
   * @returns {Promise} - Promise chứa thông tin liên hệ.
   */
  getContactById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.contacts.getContactById(id)); // Gọi hàm useApiGet để lấy thông tin liên hệ theo ID.
  },

  /**
   * Cập nhật thông tin liên hệ theo ID.
   * @param {string} id - ID của liên hệ cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin liên hệ đã được cập nhật.
   */
  updateContact: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.contacts.updateContact(id), data); // Gọi hàm useApiPut để cập nhật thông tin liên hệ.
  },

  /**
   * Xóa liên hệ theo ID.
   * @param {string} id - ID của liên hệ cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteContact: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.contacts.deleteContact(id)); // Gọi hàm useApiDelete để xóa liên hệ.
  },

  /**
   * Khôi phục liên hệ theo ID.
   * @param {string} id - ID của liên hệ cần khôi phục.
   * @param {Object} data - Dữ liệu liên hệ mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về liên hệ đã được khôi phục.
   */
  restoreContact: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.contacts.restoreContact(id), data); // Gọi hàm useApiPut để khôi phục liên hệ.
  },
};

export default contactApi;
