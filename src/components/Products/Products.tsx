import ProductItem from './ProductItem';

export type Product = {
  id: string;
  path: string;
  image: string;
  title: string;
  price: string | number;
};

type ProductsProps = {
  productList: Product[];
};

function Products({ productList }: ProductsProps) {
  return (
    <div className='max-container mt-[50px] grid grid-cols-auto-fit gap-x-[16px] gap-y-[50px] 2xl:gap-x-[30px]'>
      {productList.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default Products;
