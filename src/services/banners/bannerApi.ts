import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const bannerApi = {
  /**
   * Lấy danh sách tất cả các banner.
   * @returns {Promise} - Promise chứa danh sách các banner.
   */
  getBanners: () => {
    return useApiGet(API_ROUTE_CONFIG.banners.getBanners); // Gọi hàm useApiGet để lấy danh sách các banner.
  },

  /**
   * Tạo một banner mới.
   * @param {Object} data - Dữ liệu của banner mới.
   * @returns {Promise} - Promise chứa thông tin banner đã được tạo.
   */
  createBanner: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.banners.createBanner, data); // Gọi hàm useApiPost để tạo banner mới.
  },

  /**
   * Lấy thông tin banner theo ID.
   * @param {string} id - ID của banner.
   * @returns {Promise} - Promise chứa thông tin banner.
   */
  getBannerById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.banners.getBannerById(id)); // Gọi hàm useApiGet để lấy thông tin banner theo ID.
  },

  /**
   * Cập nhật thông tin banner theo ID.
   * @param {string} id - ID của banner cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin banner đã được cập nhật.
   */
  updateBanner: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.banners.updateBanner(id), data); // Gọi hàm useApiPut để cập nhật thông tin banner.
  },

  /**
   * Xóa banner theo ID.
   * @param {string} id - ID của banner cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteBanner: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.banners.deleteBanner(id)); // Gọi hàm useApiDelete để xóa banner.
  },

  /**
   * Khôi phục banner đã bị xóa tạm thời theo ID.
   * @param {string} id - ID của banner cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về banner đã được khôi phục.
   */
  restoreBanner: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.banners.restoreBanner(id)); // Gọi hàm useApiGet để khôi phục banner đã bị xóa tạm thời.
  },
};

export default bannerApi;
