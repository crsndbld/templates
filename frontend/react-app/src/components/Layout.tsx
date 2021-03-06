import React, { VFC } from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

export interface Layout {}
type Props = {
  children: React.ReactNode;
};
const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <div className="container w-[1024px]">{children}</div>
      <TheFooter />
    </>
  );
};

export default Layout;
