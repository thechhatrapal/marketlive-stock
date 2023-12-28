import React, { useState } from "react";
import { SymbolOptions, CommoditySymbol } from "../common/Symbols";
import Select from "react-select";

function SymbolSelect({selectedData, setSelectedData, commodityType}) {

  const handleSelect = (option) => {
    setSelectedData(option);
  };

  console.log('selecteddata', selectedData)
  return (
    <div>
      <Select
        className="user-symbol-select"
        closeMenuOnSelect={false}
        defaultValue={""}
        isMulti
        options={commodityType === 'mcx' ? CommoditySymbol : SymbolOptions}
        onChange={handleSelect}
      />
    </div>
  );
}

export default SymbolSelect;
