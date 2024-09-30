import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const orderApi = {
  /**
   * Lấy danh sách tất cả các đơn hàng.
   * @returns {Promise} - Promise chứa danh sách các đơn hàng.
   */
  getOrders: () => {
    return useApiGet(API_ROUTE_CONFIG.orders.getOrders); // Gọi hàm useApiGet để lấy danh sách các đơn hàng.
  },

  /**
   * Tạo một đơn hàng mới.
   * @param {Object} data - Dữ liệu của đơn hàng cần tạo.
   * @returns {Promise} - Promise chứa thông tin đơn hàng đã được tạo.
   */
  createOrder: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.orders.createOrder, data); // Gọi hàm useApiPost để tạo đơn hàng mới.
  },

  /**
   * Lấy thông tin đơn hàng theo ID.
   * @param {string} id - ID của đơn hàng.
   * @returns {Promise} - Promise chứa thông tin đơn hàng.
   */
  getOrderById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.orders.getOrderById(id)); // Gọi hàm useApiGet để lấy thông tin đơn hàng theo ID.
  },

  /**
   * Cập nhật thông tin một đơn hàng theo ID.
   * @param {string} id - ID của đơn hàng cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin đơn hàng đã được cập nhật.
   */
  updateOrder: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.orders.updateOrder(id), data); // Gọi hàm useApiPut để cập nhật thông tin đơn hàng.
  },

  /**
   * Xóa một đơn hàng theo ID.
   * @param {string} id - ID của đơn hàng cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteOrder: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.orders.deleteOrder(id)); // Gọi hàm useApiDelete để xóa đơn hàng.
  },

  /**
   * Khôi phục một đơn hàng đã bị xóa mềm theo ID.
   * @param {string} id - ID của đơn hàng cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restoreOrder: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.orders.restoreOrder(id)); // Gọi hàm useApiGet để khôi phục đơn hàng đã bị xóa mềm.
  },
};

export default orderApi;
