import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const categoryApi = {
  /**
   * Lấy danh sách tất cả các danh mục.
   * @returns {Promise} - Promise chứa danh sách các danh mục.
   */
  getCategories: () => {
    return useApiGet(API_ROUTE_CONFIG.categories.getCategories); // Gọi hàm useApiGet để lấy danh sách các danh mục.
  },

  /**
   * Tạo một danh mục mới.
   * @param {Object} data - Dữ liệu của danh mục cần tạo.
   * @returns {Promise} - Promise chứa thông tin danh mục đã được tạo.
   */
  createCategory: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.categories.createCategory, data); // Gọi hàm useApiPost để tạo danh mục mới.
  },

  /**
   * Lấy thông tin danh mục theo ID.
   * @param {string} id - ID của danh mục.
   * @returns {Promise} - Promise chứa thông tin danh mục.
   */
  getCategoryById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.categories.getCategoryById(id)); // Gọi hàm useApiGet để lấy thông tin danh mục theo ID.
  },

  /**
   * Cập nhật thông tin một danh mục theo ID.
   * @param {string} id - ID của danh mục cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin danh mục đã được cập nhật.
   */
  updateCategory: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.categories.updateCategory(id), data); // Gọi hàm useApiPut để cập nhật thông tin danh mục.
  },

  /**
   * Xóa một danh mục theo ID.
   * @param {string} id - ID của danh mục cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteCategory: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.categories.deleteCategory(id)); // Gọi hàm useApiDelete để xóa danh mục.
  },

  /**
   * Khôi phục một danh mục đã bị xóa mềm theo ID.
   * @param {string} id - ID của danh mục cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restoreCategory: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.categories.restoreCategory(id)); // Gọi hàm useApiGet để khôi phục danh mục đã bị xóa mềm.
  },
};

export default categoryApi;
