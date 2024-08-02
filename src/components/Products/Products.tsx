import ProductItem from './ProductItem';

type Product = {
  id: string;
  image: string;
  title: string;
  price: string | number;
};

function Products({ productList }: { productList: Product[] }) {
  return (
    <div className='max-container mt-[50px] grid grid-cols-auto-fit gap-x-[16px] gap-y-[50px] 2xl:gap-x-[30px]'>
      {productList.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default Products;
