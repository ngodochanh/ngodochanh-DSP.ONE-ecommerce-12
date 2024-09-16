'use client';

import RelatedProducts from '@/app/[locale]/product/[prod]/RelatedProducts';
import { PRODUCT_LIST } from '@/constantsProduct';
import React, { useEffect, useState } from 'react';
import { IProduct } from '@/types';

export type IViewedProduct = {
  id: string; // ID của sản phẩm
  timestamp: number; // Thời gian xem sản phẩm
};

// Lưu sản phẩm vào danh sách đã xem
const addProductToViewedList = (product: IProduct) => {
  let productString = localStorage.getItem('viewedProducts');
  let products: IViewedProduct[] = productString ? JSON.parse(productString) : [];

  const newViewedProduct: IViewedProduct = {
    id: product.id,
    timestamp: Date.now(),
  };

  // Xóa sản phẩm cũ nếu có
  const productIndex = products.findIndex((p: IViewedProduct) => p.id === newViewedProduct.id);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
  }

  // Thêm sản phẩm mới vào đầu danh sách
  products.unshift(newViewedProduct);

  // Giữ lại chỉ 10 sản phẩm gần đây nhất
  if (products.length > 10) {
    products.pop();
  }

  localStorage.setItem('viewedProducts', JSON.stringify(products));
};

// Lấy sản phẩm đã xem từ localStorage và xóa sản phẩm quá hạn
const getViewedProducts = (currentProductId: string): IViewedProduct[] => {
  let productsString = localStorage.getItem('viewedProducts');
  let products: IViewedProduct[] = productsString ? JSON.parse(productsString) : [];

  // Xóa các sản phẩm đã quá hạn (hơn 30 ngày)
  const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  // Xóa sản phẩm quá hạn
  products = products.filter((p: IViewedProduct) => now - p.timestamp <= thirtyDaysInMilliseconds);

  // Lưu lại danh sách đã được làm sạch
  localStorage.setItem('viewedProducts', JSON.stringify(products));

  // Lọc sản phẩm hiện tại ra khỏi danh sách
  return products.filter((p: IViewedProduct) => p.id !== currentProductId);
};

function RecentlyViewedProducts({ product }: { product: IProduct | undefined }) {
  const [products, setProducts] = useState<IProduct[]>([]);

  // Cập nhật danh sách sản phẩm đã xem khi sản phẩm hiện tại thay đổi
  useEffect(() => {
    if (product) {
      addProductToViewedList(product);
    }
  }, [product]);

  // Lấy danh sách sản phẩm đã xem và cập nhật state
  useEffect(() => {
    if (product) {
      const viewedProducts = getViewedProducts(product.id);
      const fetchProductDetails = (id: string) => PRODUCT_LIST.find((p) => p.id === id) || null;
      const productsList = viewedProducts
        .map((viewedProduct) => fetchProductDetails(viewedProduct.id))
        .filter((p): p is IProduct => p !== null);
      setProducts(productsList);
    }
  }, [product]);

  return <RelatedProducts title="Đã xem gần đây" productList={products} />;
}

export default RecentlyViewedProducts;
