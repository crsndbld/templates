import React, { VFC } from "react";

export interface Product {
    key: number;
    id: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    color: string;
    price: number;
  }

type Props = {
  products: Product[];
};

const ItemList: VFC<Props> = ({products}) => {
  return (
    <>
      <div className="bg-black">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-4 sm:px-4 lg:max-w-7xl lg:px-4">
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ItemList;
