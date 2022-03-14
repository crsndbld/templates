import React, { VFC } from "react";
import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import Pagenation from "../components/Pagenation";
import SelectList, { SelectItem } from "../components/SelectList";

export interface ItemListArea {}
type Props = {};
const ItemListArea: VFC<Props> = () => {
  const selectItems: SelectItem[] = [
    { id: "1", name: "新着順" },
    { id: "2", name: "価格が安い順" },
    { id: "3", name: "価格が高い順" },
  ];
  const handleSelectChange = (id: string) => {
    alert(id);
  };

  const products = [
    {
      key: 1,
      id: "1",
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: "Black",
    },
    {
      key: 2,
      id: "2",
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: "Black",
    },
    {
      key: 3,
      id: "3",
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: "Black",
    },
    {
      key: 4,
      id: "4",
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: "Black",
    },
    {
      key: 5,
      id: "5",
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: "Black",
    },
  ];
  return (
    <>
      <Layout>
        <div className="grid grid-cols-12 bg-red-400">
          <div className="grid col-span-12 justify-start bg-blue-400">
            <p>breadcrumb</p>
          </div>
          <div className="grid col-span-2 justify-start bg-green-400">
            <p>topix</p>
          </div>
          <div className="grid col-span-10 bg-gray-400">
            <div className="flex justify-end">
              <SelectList
                selectItems={selectItems}
                selectChange={(id) => handleSelectChange(id)}
              />
            </div>
            <div className="">
              <ItemList products={products} />
              <Pagenation />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ItemListArea;
