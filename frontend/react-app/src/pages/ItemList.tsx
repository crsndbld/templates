import React, { VFC } from "react";
import Layout from "../components/Layout";
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

  return (
    <>
      <Layout>
        <p>ItemList</p>
        <SelectList
          selectItems={selectItems}
          selectChange={(id) => handleSelectChange(id)}
        />
      </Layout>
    </>
  );
};

export default ItemList;
