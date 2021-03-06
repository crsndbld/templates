import React, { VFC } from "react";
import { Link } from "react-router-dom";

export interface TheHeader {}
type Props = {};
const TheHeader: VFC<Props> = () => {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="ItemList">商品一覧</Link>
      </nav>
    </>
  );
};

export default TheHeader;
