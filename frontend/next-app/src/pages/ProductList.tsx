import React from 'react';
import Link from 'next/link';

const ProductList = () => {
  return (
    <>
      <div>
        <p>ProductList</p>
        <Link href={'/'}>
          <a>Back To Home</a>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
