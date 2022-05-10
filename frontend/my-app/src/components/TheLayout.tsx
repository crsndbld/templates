import React, { VFC } from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

type Props = {
  children: React.ReactNode;
};
const TheLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main className="container mx-auto bg-green-200">{children}</main>
      <TheFooter />
    </>
  );
};

export default TheLayout;
