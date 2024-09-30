import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const voucherApi = {
  /**
   * Lấy danh sách tất cả các voucher.
   * @returns {Promise} - Promise chứa danh sách các voucher.
   */
  getVouchers: () => {
    return useApiGet(API_ROUTE_CONFIG.vouchers.getVouchers); // Gọi hàm useApiGet để lấy danh sách các voucher.
  },

  /**
   * Tạo một voucher mới.
   * @param {Object} data - Dữ liệu của voucher cần tạo.
   * @returns {Promise} - Promise chứa thông tin voucher đã được tạo.
   */
  createVoucher: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.vouchers.createVoucher, data); // Gọi hàm useApiPost để tạo voucher mới.
  },

  /**
   * Lấy thông tin voucher theo ID.
   * @param {string} id - ID của voucher.
   * @returns {Promise} - Promise chứa thông tin voucher.
   */
  getVoucherById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.vouchers.getVoucherById(id)); // Gọi hàm useApiGet để lấy thông tin voucher theo ID.
  },

  /**
   * Cập nhật thông tin một voucher theo ID.
   * @param {string} id - ID của voucher cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin voucher đã được cập nhật.
   */
  updateVoucher: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.vouchers.updateVoucher(id), data); // Gọi hàm useApiPut để cập nhật thông tin voucher.
  },

  /**
   * Xóa một voucher theo ID.
   * @param {string} id - ID của voucher cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteVoucher: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.vouchers.deleteVoucher(id)); // Gọi hàm useApiDelete để xóa voucher.
  },

  /**
   * Khôi phục một voucher đã bị xóa mềm theo ID.
   * @param {string} id - ID của voucher cần khôi phục.
   * @returns {Promise} - Promise chứa thông tin về kết quả khôi phục.
   */
  restoreVoucher: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.vouchers.restoreVoucher(id)); // Gọi hàm useApiGet để khôi phục voucher đã bị xóa mềm.
  },
};

export default voucherApi;
