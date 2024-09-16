import ProductItem from './ProductItem';
import ProductNotFound from '@/components/ProductNotFound';
import { IProduct } from '@/types';

type ProductsProps = {
  productList: IProduct[];
};

function ProductList({ productList }: ProductsProps) {
  return (
    <div className="mt-[50px] grid grid-cols-1 gap-x-[16px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-[30px]">
      {productList.length === 0 ? (
        <ProductNotFound />
      ) : (
        productList.map((prod) => <ProductItem key={prod.id} product={prod} />)
      )}
    </div>
  );
}

export default ProductList;
