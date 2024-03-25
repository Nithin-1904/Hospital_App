
import React from "react";

const DropBox = () => {
  return (
      <select className="p-3 rounded-md border-slate-300 border-2 w-full" value="Choose">
        <option value="Choose">---Choose City---</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
  );
};

export default DropBox;
