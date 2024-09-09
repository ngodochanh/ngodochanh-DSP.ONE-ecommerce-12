'use client';

import RelatedProducts from '@/app/[locale]/product/[prod]/RelatedProducts';
import { PRODUCT_LIST } from '@/constantsProduct';
import { ProductType } from '@/type';
import React, { useEffect, useState } from 'react';

// Định nghĩa kiểu cho sản phẩm đã xem
type ViewedProduct = {
  id: number; // ID của sản phẩm
  timestamp: number; // Thời gian xem sản phẩm
};

function RecentlyViewedProducts({ product }: { product: ProductType | undefined }) {
  // Khởi tạo trạng thái với sản phẩm được lấy từ localStorage, nếu có
  const [viewedProducts, setViewedProducts] = useState<ViewedProduct[]>(() => {
    const storedProducts = localStorage.getItem('viewedProducts');
    if (storedProducts) {
      const parsedProducts: ViewedProduct[] = JSON.parse(storedProducts);
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000; // 30 ngày thì xóa
      // Lọc các sản phẩm hợp lệ (chưa quá 30 ngày)
      const validProducts = parsedProducts.filter((vp) => Date.now() - vp.timestamp <= thirtyDaysInMs);
      return validProducts;
    }

    return [];
  });

  // Lọc danh sách sản phẩm để chỉ hiển thị những sản phẩm đã xem và không phải là sản phẩm hiện tại
  const filteredProducts = PRODUCT_LIST.filter(
    (p) => viewedProducts.some((vp) => vp.id === p.id) && product?.id !== p.id
  );

  // Cập nhật danh sách sản phẩm đã xem khi sản phẩm mới được chọn
  useEffect(() => {
    if (product) {
      const updatedProducts = [...viewedProducts];
      const productIndex = updatedProducts.findIndex((vp) => vp.id === product.id);

      if (productIndex !== -1) {
        // Nếu sản phẩm đã có trong danh sách, xóa nó
        updatedProducts.splice(productIndex, 1);
      }

      // Thêm sản phẩm mới vào đầu danh sách
      updatedProducts.unshift({ id: product.id, timestamp: Date.now() });

      // Giới hạn số lượng sản phẩm đã xem (tối đa 10 sản phẩm)
      if (updatedProducts.length > 10) {
        updatedProducts.pop(); // Xóa sản phẩm cũ nhất nếu số lượng vượt quá 10
      }

      setViewedProducts(updatedProducts);
    }
  }, [product]);

  // Lưu danh sách sản phẩm đã xem vào localStorage
  useEffect(() => {
    localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
  }, [viewedProducts]);

  return <RelatedProducts title='đã xem gần đây' productList={filteredProducts} />;
}

export default RecentlyViewedProducts;
