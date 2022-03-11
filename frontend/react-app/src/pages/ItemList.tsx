import React, { VFC } from "react";
import ItemCard from "../components/ItemCard";
import Layout from "../components/Layout";
import Pagenation from "../components/Pagenation";
import SelectList, { SelectItem } from "../components/SelectList";

export interface ItemList {}
type Props = {};
const ItemList: VFC<Props> = () => {
  const selectItems: SelectItem[] = [
    { key: 1, id: "1", name: "新着順" },
    { key: 2, id: "2", name: "価格が安い順" },
    { key: 3, id: "3", name: "価格が高い順" },
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
        <p>ItemList</p>
        <SelectList
          selectItems={selectItems}
          selectChange={(id) => handleSelectChange(id)}
        />
        <ItemCard products={products} />
        <Pagenation />
      </Layout>
    </>
  );
};

export default ItemList;
