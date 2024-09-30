import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const paymentMethodApi = {
  /**
   * Lấy danh sách tất cả các phương thức thanh toán.
   * @returns {Promise} - Promise chứa danh sách các phương thức thanh toán.
   */
  getPaymentMethods: () => {
    return useApiGet(API_ROUTE_CONFIG.paymentMethods.getPaymentMethods); // Gọi hàm useApiGet để lấy danh sách các phương thức thanh toán.
  },

  /**
   * Tạo một phương thức thanh toán mới.
   * @param {Object} data - Dữ liệu của phương thức thanh toán cần tạo.
   * @returns {Promise} - Promise chứa thông tin phương thức thanh toán đã được tạo.
   */
  createPaymentMethod: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.paymentMethods.createPaymentMethod, data); // Gọi hàm useApiPost để tạo phương thức thanh toán mới.
  },

  /**
   * Lấy thông tin phương thức thanh toán theo ID.
   * @param {string} id - ID của phương thức thanh toán.
   * @returns {Promise} - Promise chứa thông tin phương thức thanh toán.
   */
  getPaymentMethodById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.paymentMethods.getPaymentMethodById(id)); // Gọi hàm useApiGet để lấy thông tin phương thức thanh toán theo ID.
  },

  /**
   * Cập nhật thông tin một phương thức thanh toán theo ID.
   * @param {string} id - ID của phương thức thanh toán cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin phương thức thanh toán đã được cập nhật.
   */
  updatePaymentMethod: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.paymentMethods.updatePaymentMethod(id), data); // Gọi hàm useApiPut để cập nhật thông tin phương thức thanh toán.
  },

  /**
   * Xóa một phương thức thanh toán theo ID.
   * @param {string} id - ID của phương thức thanh toán cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deletePaymentMethod: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.paymentMethods.deletePaymentMethod(id)); // Gọi hàm useApiDelete để xóa phương thức thanh toán.
  },

  /**
   * Khôi phục một phương thức thanh toán đã bị xóa mềm theo ID.
   * @param {string} id - ID của phương thức thanh toán cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restorePaymentMethod: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.paymentMethods.restorePaymentMethod(id)); // Gọi hàm useApiGet để khôi phục phương thức thanh toán đã bị xóa mềm.
  },
};

export default paymentMethodApi;
