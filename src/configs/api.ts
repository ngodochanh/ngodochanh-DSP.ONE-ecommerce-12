const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const core = process.env.NEXT_PUBLIC_CORE_API_URL;
const ecommerce = process.env.NEXT_PUBLIC_ECOMMERCE_API_URL;
const v1 = process.env.NEXT_PUBLIC_API_VERSION;

export default {
  attributes: {
    //
    getAttributes: `${baseUrl}/api/${ecommerce}/${v1}/attributes`,
    createAttribute: `${baseUrl}/api/${ecommerce}/${v1}/attributes`,
    getAttributeById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attributes/${id}`;
    },
    updateAttribute: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attributes/${id}`;
    },
    deleteAttribute: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attributes/${id}`;
    },
    restoreAttribute: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attributes/restore/${id}`;
    },
    //
    getAttributeGroups: `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups`,
    createAttributeGroup: `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups`,
    getAttributeGroupById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups/${id}`;
    },
    updateAttributeGroup: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups/${id}`;
    },
    deleteAttributeGroup: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups/${id}`;
    },
    restoreAttributeGroup: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/attribute_groups/restore/${id}`;
    },
  },
  auth: {
    loginWithGoogle: `${baseUrl}/api/${core}/${v1}/users/login/google-account`,
    connectGoogleAccount: `${baseUrl}/api/${core}/${v1}/users/connect/google-account`,
  },
  banners: {
    getBanners: `${baseUrl}/api/${ecommerce}/${v1}/banners`,
    createBanner: `${baseUrl}/api/${ecommerce}/${v1}/banners`,
    getBannerById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/banners/${id}`;
    },
    updateBanner: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/banners/${id}`;
    },
    deleteBanner: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/banners/${id}`;
    },
    restoreBanner: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/banners/restore/${id}`;
    },
  },
  carts: {
    getCartItems: `${baseUrl}/api/${ecommerce}/${v1}/carts`,
    addCartItem: `${baseUrl}/api/${ecommerce}/${v1}/carts`,
    getCartItemById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/carts/${id}`;
    },
    updateCartItem: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/carts/${id}`;
    },
    removeCartItem: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/carts/${id}`;
    },
  },
  categories: {
    getCategories: `${baseUrl}/api/${ecommerce}/${v1}/categories`,
    createCategory: `${baseUrl}/api/${ecommerce}/${v1}/categories`,
    getCategoryById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/categories/${id}`;
    },
    updateCategory: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/categories/${id}`;
    },
    deleteCategory: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/categories/${id}`;
    },
    restoreCategory: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/categories/restore/${id}`;
    },
  },
  comments: {
    getComments: `${baseUrl}/api/${ecommerce}/${v1}/comments`,
    createComment: `${baseUrl}/api/${ecommerce}/${v1}/comments`,
    getCommentById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/comments/${id}`;
    },
    updateComment: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/comments/${id}`;
    },
    deleteComment: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/comments/${id}`;
    },
  },
  contacts: {
    getContacts: `${baseUrl}/api/${core}/${v1}/contacts`,
    createContact: `${baseUrl}/api/${core}/${v1}/contacts`,
    getContactById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/contacts/${id}`;
    },
    updateContact: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/contacts/${id}`;
    },
    deleteContact: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/contacts/${id}`;
    },
    restoreContact: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/contacts/restore/${id}`;
    },
  },
  orders: {
    getOrders: `${baseUrl}/api/${ecommerce}/${v1}/orders`,
    createOrder: `${baseUrl}/api/${ecommerce}/${v1}/orders`,
    getOrderById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/orders/${id}`;
    },
    updateOrder: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/orders/${id}`;
    },
    deleteOrder: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/orders/${id}`;
    },
    restoreOrder: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/orders/restore/${id}`;
    },
  },
  paymentMethods: {
    getPaymentMethods: `${baseUrl}/api/${ecommerce}/${v1}/payment_methods`,
    createPaymentMethod: `${baseUrl}/api/${ecommerce}/${v1}/payment_methods`,
    getPaymentMethodById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/payment_methods/${id}`;
    },
    updatePaymentMethod: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/payment_methods/${id}`;
    },
    deletePaymentMethod: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/payment_methods/${id}`;
    },
    restorePaymentMethod: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/payment_methods/restore/${id}`;
    },
  },
  permissions: {
    getPermissions: `${baseUrl}/api/${core}/${v1}/permissions`,
    createPermission: `${baseUrl}/api/${core}/${v1}/permissions`,
    getPermissionById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/permissions/${id}`;
    },
    updatePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/permissions/${id}`;
    },
    deletePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/permissions/${id}`;
    },
    permanentDeletePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/permissions/permanent/${id}`;
    },
    restorePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/permissions/restore/${id}`;
    },
  },
  ranks: {
    getRanks: `${baseUrl}/api/${core}/${v1}/ranks`,
    createRank: `${baseUrl}/api/${core}/${v1}/ranks`,
    getRankById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/ranks/${id}`;
    },
    updateRank: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/ranks/${id}`;
    },
    deleteRank: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/ranks/${id}`;
    },
    permanentDeleteRank: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/ranks/permanent/${id}`;
    },
    restoreRank: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/ranks/restore/${id}`;
    },
  },
  roles: {
    getRoles: `${baseUrl}/api/${core}/${v1}/roles`,
    createRole: `${baseUrl}/api/${core}/${v1}/roles`,
    getRoleById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/roles/${id}`;
    },
    updateRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/roles/${id}`;
    },
    deleteRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/roles/${id}`;
    },
    permanentDeleteRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/roles/permanent/${id}`;
    },
    restoreRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/roles/restore/${id}`;
    },
    //
    getRolePermissions: `${baseUrl}/api/${core}/${v1}/rolepermissions`,
    createRolePermission: `${baseUrl}/api/${core}/${v1}/rolepermissions`,
    getRolePermissionById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/rolepermissions/${id}`;
    },
    updateRolePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/rolepermissions/${id}`;
    },
    deleteRolePermission: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/rolepermissions/${id}`;
    },
  },
  ships: {
    getShips: `${baseUrl}/api/${ecommerce}/${v1}/ships`,
    createShip: `${baseUrl}/api/${ecommerce}/${v1}/ships`,
    getShipById: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/ships/${id}`;
    },
    updateShip: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/ships/${id}`;
    },
    deleteShip: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/ships/${id}`;
    },
    restoreShip: (id: string) => {
      return `${baseUrl}/api/${ecommerce}/${v1}/ships/restore/${id}`;
    },
  },
  users: {
    getUsers: `${baseUrl}/api/${core}/${v1}/users`,
    createUser: `${baseUrl}/api/${core}/${v1}/users`,
    getUserById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/users/${id}`;
    },
    updateUser: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/users/${id}`;
    },
    deleteUser: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/users/${id}`;
    },
    getUserByUsername: (username: string) => {
      return `${baseUrl}/api/${core}/${v1}/users/${username}`;
    },
    getUserProfile: `${baseUrl}/api/${core}/${v1}/users/profile`,
    updateUserProfile: `${baseUrl}/api/${core}/${v1}/users/profile/edit`,
    //
    loginUser: `${baseUrl}/api/${core}/${v1}/users/login`,
    logoutUser: `${baseUrl}/api/${core}/${v1}/users/logout`,
    restoreUserProfile: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/users/restore/${id}`;
    },
    //
    getUserRoles: `${baseUrl}/api/${core}/${v1}/userroles`,
    createUserRole: `${baseUrl}/api/${core}/${v1}/userroles`,
    getUserRoleById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/userroles/${id}`;
    },
    updateUserRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/userroles/${id}`;
    },
    deleteUserRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/userroles/${id}`;
    },
    permanentDeleteUserRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/userroles/permanent/${id}`;
    },
    restoreUserRole: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/userroles/restore/${id}`;
    },
  },
  vouchers: {
    getVouchers: `${baseUrl}/api/${core}/${v1}/vouchers`,
    createVoucher: `${baseUrl}/api/${core}/${v1}/vouchers`,
    getVoucherById: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/vouchers/${id}`;
    },
    updateVoucher: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/vouchers/${id}`;
    },
    deleteVoucher: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/vouchers/${id}`;
    },
    restoreVoucher: (id: string) => {
      return `${baseUrl}/api/${core}/${v1}/vouchers/restore/${id}`;
    },
  },
};
