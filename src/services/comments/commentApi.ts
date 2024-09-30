import { API_ROUTE_CONFIG } from '@/configs';
import { useApiGet, useApiPost, useApiPut, useApiDelete } from '@/services/useApiRequest';

const commentApi = {
  /**
   * Lấy danh sách tất cả các bình luận.
   * @returns {Promise} - Promise chứa danh sách các bình luận.
   */
  getComments: () => {
    return useApiGet(API_ROUTE_CONFIG.comments.getComments); // Gọi hàm useApiGet để lấy danh sách các bình luận.
  },

  /**
   * Tạo một bình luận mới.
   * @param {Object} data - Dữ liệu của bình luận cần tạo.
   * @returns {Promise} - Promise chứa thông tin bình luận đã được tạo.
   */
  createComment: (data: any) => {
    return useApiPost(API_ROUTE_CONFIG.comments.createComment, data); // Gọi hàm useApiPost để tạo bình luận mới.
  },

  /**
   * Lấy thông tin bình luận theo ID.
   * @param {string} id - ID của bình luận.
   * @returns {Promise} - Promise chứa thông tin bình luận.
   */
  getCommentById: (id: string) => {
    return useApiGet(API_ROUTE_CONFIG.comments.getCommentById(id)); // Gọi hàm useApiGet để lấy thông tin bình luận theo ID.
  },

  /**
   * Cập nhật thông tin một bình luận theo ID.
   * @param {string} id - ID của bình luận cần cập nhật.
   * @param {Object} data - Dữ liệu mới để cập nhật.
   * @returns {Promise} - Promise chứa thông tin bình luận đã được cập nhật.
   */
  updateComment: (id: string, data: any) => {
    return useApiPut(API_ROUTE_CONFIG.comments.updateComment(id), data); // Gọi hàm useApiPut để cập nhật thông tin bình luận.
  },

  /**
   * Xóa một bình luận theo ID.
   * @param {string} id - ID của bình luận cần xóa.
   * @returns {Promise} - Promise chứa thông tin về kết quả xóa.
   */
  deleteComment: (id: string) => {
    return useApiDelete(API_ROUTE_CONFIG.comments.deleteComment(id)); // Gọi hàm useApiDelete để xóa bình luận.
  },
};

export default commentApi;
