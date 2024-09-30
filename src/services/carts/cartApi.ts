import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const cartApi = {
  /**
   * Lấy danh sách tất cả các mặt hàng trong giỏ hàng.
   * @returns {Promise} - Promise chứa danh sách các mặt hàng trong giỏ hàng.
   */
  getCartItems: () => {
    return useApiGet(API_ROUTE_CONFIG.carts.getCartItems); // Gọi hàm useApiGet để lấy danh sách các mặt hàng trong giỏ hàng.
  },

  /**
   * Thêm một mặt hàng mới vào giỏ hàng.
   * @param {Object} data - Dữ liệu của mặt hàng cần thêm.
   * @returns {Promise} - Promise chứa thông tin mặt hàng đã được thêm.
   */
  addCartItem: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.carts.addCartItem, data); // Gọi hàm useApiPost để thêm mặt hàng mới vào giỏ hàng.
  },

  /**
   * Lấy thông tin mặt hàng trong giỏ hàng theo ID.
   * @param {string} id - ID của mặt hàng trong giỏ hàng.
   * @returns {Promise} - Promise chứa thông tin mặt hàng trong giỏ hàng.
   */
  getCartItemById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.carts.getCartItemById(id)); // Gọi hàm useApiGet để lấy thông tin mặt hàng theo ID.
  },

  /**
   * Cập nhật thông tin một mặt hàng trong giỏ hàng theo ID.
   * @param {string} id - ID của mặt hàng cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin mặt hàng đã được cập nhật.
   */
  updateCartItem: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.carts.updateCartItem(id), data); // Gọi hàm useApiPut để cập nhật thông tin mặt hàng trong giỏ hàng.
  },

  /**
   * Xóa một mặt hàng khỏi giỏ hàng theo ID.
   * @param {string} id - ID của mặt hàng cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  removeCartItem: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.carts.removeCartItem(id)); // Gọi hàm useApiDelete để xóa mặt hàng khỏi giỏ hàng.
  },
};

export default cartApi;
