import React, { useState } from "react";

function CurrencySelector() {
    const [value, setValue] = useState('');
    console.log({value})
  return (

          
    <select value={value} className="form-select bg-success text-white" onChange={(e) => {
        setValue(`Currency (${e.target.value})`);

    }}>
      <option >$ Dollar</option>
      <option >£ Pound</option>
      <option >€ Euro</option>
      <option >₹ Rupee</option>
    </select>

  );
}


export default CurrencySelector;