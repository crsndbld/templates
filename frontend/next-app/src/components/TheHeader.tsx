import React from 'react';
import Link from 'next/link';

const TheHeader = () => {
  return (
    <>
      <div>
        <p>Header</p>
        <Link href={'/ProductList'}>
          <a>ProductList</a>
        </Link>
      </div>
    </>
  );
};

export default TheHeader;
