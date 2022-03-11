import React, { VFC } from "react";

export interface SelectItem {
  key: number;
  id: string;
  name: string;
}

type Props = {
  selectItems: SelectItem[];
  selectChange: (id: string) => void;
};

const SelectList: VFC<Props> = ({ selectItems, selectChange }) => {
  return (
    <>
      <select
        className="form-select form-select-sm block w-auto px-1 py-1 text-sm font-normal text-gray-700 
        bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => selectChange(e.target.value)}
      >
        {selectItems?.map((v) => (
          <option key={v.key} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectList;
