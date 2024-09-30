import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const rankApi = {
  /**
   * Lấy danh sách tất cả các hạng (ranks).
   * @returns {Promise} - Promise chứa danh sách các hạng.
   */
  getRanks: () => {
    return useApiGet(API_ROUTE_CONFIG.ranks.getRanks); // Gọi hàm useApiGet để lấy danh sách các hạng.
  },

  /**
   * Tạo một hạng mới.
   * @param {Object} data - Dữ liệu của hạng mới.
   * @returns {Promise} - Promise chứa thông tin hạng đã được tạo.
   */
  createRank: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.ranks.createRank, data); // Gọi hàm useApiPost để tạo hạng mới.
  },

  /**
   * Lấy thông tin hạng theo ID.
   * @param {string} id - ID của hạng.
   * @returns {Promise} - Promise chứa thông tin hạng.
   */
  getRankById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.ranks.getRankById(id)); // Gọi hàm useApiGet để lấy thông tin hạng theo ID.
  },

  /**
   * Cập nhật thông tin hạng theo ID.
   * @param {string} id - ID của hạng cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin hạng đã được cập nhật.
   */
  updateRank: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.ranks.updateRank(id), data); // Gọi hàm useApiPut để cập nhật thông tin hạng.
  },

  /**
   * Xóa hạng theo ID.
   * @param {string} id - ID của hạng cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteRank: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.ranks.deleteRank(id)); // Gọi hàm useApiDelete để xóa hạng.
  },

  /**
   * Xóa hạng theo ID một cách vĩnh viễn.
   * @param {string} id - ID của hạng cần xóa vĩnh viễn.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  permanentDeleteRank: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.ranks.permanentDeleteRank(id)); // Gọi hàm useApiDelete để xóa hạng một cách vĩnh viễn.
  },

  /**
   * Khôi phục hạng theo ID.
   * @param {string} id - ID của hạng cần khôi phục.
   * @param {Object} data - Dữ liệu hạng mới để khôi phục.
   * @returns {Promise} - Promise chứa thông tin về hạng đã được khôi phục.
   */
  restoreRank: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.ranks.restoreRank(id), data); // Gọi hàm useApiPut để khôi phục hạng.
  },
};

export default rankApi;
