'use client';

import Link from 'next/link';
import HeaderSection from '@/components/HeaderSection';
import { CATEGORY_PRODUCT_LIST, SPEIAL_PRODUCT_LIST } from './constants';
import Products from '@/components/Products';

function SpeialProducts() {
  return (
    <HeaderSection title='Speial Products'>
      {/* Nav */}
      <nav className='py-5 mt-5'>
        <ul className='flex-center text-navigation text-black-dark capitalize flex-center'>
          {CATEGORY_PRODUCT_LIST.map((product) => (
            <li key={product.key}>
              <Link href='/' className='block px-5 sm:px-6 py-[10px] hover:text-orange-bright'>
                {product.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Product */}
      <Products productList={SPEIAL_PRODUCT_LIST} />
    </HeaderSection>
  );
}

export default SpeialProducts;
