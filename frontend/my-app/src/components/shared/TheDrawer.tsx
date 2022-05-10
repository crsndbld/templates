import React, { VFC } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
const TheDrawer: VFC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <>
      <div
        className={
          "fixed inset-0 z-10 bg-gray-900 bg-opacity-25 overflow-hidden transform ease-in-out" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0"
            : " transition-all opacity-0 duration-500 -translate-x-full")
        }
      >
        <div
          className={
            "w-100 px-4 py-4 absolute right-full bg-white h-full shadow-xl duration-500 ease-in-out transition-all transform" +
            (isOpen ? " translate-x-full" : " translate-x-0")
          }
        >
          {children}
        </div>
        <div
          className="w-screen h-full cursor-pointer"
          onClick={() => onClose()}
        ></div>
      </div>
    </>
  );
};

export default TheDrawer;
