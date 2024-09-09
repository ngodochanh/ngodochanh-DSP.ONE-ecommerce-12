'use client';

import RelatedProducts from '@/app/[locale]/product/[prod]/RelatedProducts';
import { PRODUCT_LIST } from '@/constantsProduct';
import { ProductType } from '@/type';
import React, { useEffect, useState } from 'react';

type ViewedProduct = {
  id: number;
  timestamp: number;
};

function RecentlyViewedProducts({ product }: { product: ProductType | undefined }) {
  const [viewedProducts, setViewedProducts] = useState<ViewedProduct[]>(() => {
    const storedProducts = localStorage.getItem('viewedProducts');
    if (storedProducts) {
      const parsedProducts: ViewedProduct[] = JSON.parse(storedProducts);
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000; // 30 ngày thì xóa
      const validProducts = parsedProducts.filter((vp) => Date.now() - vp.timestamp <= thirtyDaysInMs);
      return validProducts;
    }
    return [];
  });

  const filteredProducts = PRODUCT_LIST.filter(
    (p) => viewedProducts.some((vp) => vp.id === p.id) && product?.id !== p.id
  );

  useEffect(() => {
    if (product) {
      const updatedProducts = [...viewedProducts];
      const productIndex = updatedProducts.findIndex((vp) => vp.id === product.id);
      if (productIndex !== -1) {
        updatedProducts.splice(productIndex, 1);
      }
      updatedProducts.unshift({ id: product.id, timestamp: Date.now() });
      setViewedProducts(updatedProducts);
    }
  }, [product]);

  useEffect(() => {
    localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
  }, [viewedProducts]);

  return <RelatedProducts title='đã xem gần đây' productList={filteredProducts} />;
}

export default RecentlyViewedProducts;
