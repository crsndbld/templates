import React, { VFC } from "react";
import TheDrawer from "../components/shared/TheDrawer";
import TheSidebar from "../components/shared/TheSidebar";
import TheLayout from "../components/TheLayout";

const Products: VFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <TheLayout>
        <div className="bg-blue-200 flex justify-center">
          <button
            onClick={() => {
              setIsOpen((_isOpen) => !_isOpen);
            }}
          >
            filter
          </button>
        </div>
        <div className="bg-green-200 flex">
          <div className="bg-yellow-200 w-30">left nav</div>
          <div className="bg-white-200 h-16">main</div>
        </div>
        <TheDrawer isOpen={isOpen} onClose={()=>setIsOpen(false)}><p>content</p></TheDrawer>
        {/* <TheSidebar isShowing={true}></TheSidebar> */}
      </TheLayout>
    </>
  );
};

export default Products;
