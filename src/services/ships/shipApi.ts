import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const shipApi = {
  /**
   * Lấy danh sách tất cả các ship.
   * @returns {Promise} - Promise chứa danh sách các ship.
   */
  getShips: () => {
    return useApiGet(API_ROUTE_CONFIG.ships.getShips); // Gọi hàm useApiGet để lấy danh sách các ship.
  },

  /**
   * Tạo một ship mới.
   * @param {Object} data - Dữ liệu của ship cần tạo.
   * @returns {Promise} - Promise chứa thông tin ship đã được tạo.
   */
  createShip: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.ships.createShip, data); // Gọi hàm useApiPost để tạo ship mới.
  },

  /**
   * Lấy thông tin ship theo ID.
   * @param {string} id - ID của ship.
   * @returns {Promise} - Promise chứa thông tin ship.
   */
  getShipById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.ships.getShipById(id)); // Gọi hàm useApiGet để lấy thông tin ship theo ID.
  },

  /**
   * Cập nhật thông tin một ship theo ID.
   * @param {string} id - ID của ship cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin ship đã được cập nhật.
   */
  updateShip: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.ships.updateShip(id), data); // Gọi hàm useApiPut để cập nhật thông tin ship.
  },

  /**
   * Xóa một ship theo ID.
   * @param {string} id - ID của ship cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteShip: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.ships.deleteShip(id)); // Gọi hàm useApiDelete để xóa ship.
  },

  /**
   * Khôi phục một ship đã bị xóa mềm theo ID.
   * @param {string} id - ID của ship cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restoreShip: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.ships.restoreShip(id)); // Gọi hàm useApiGet để khôi phục ship đã bị xóa mềm.
  },
};

export default shipApi;
