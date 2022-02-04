import React from "react";
import Button from "./button";
import Input from "./inputs";
import Operators from "./operators";

const Calculator = () => {
  return(
    <div>
      <Input/> <Operators/> <Input/> <Button/>
    </div>
  )
}
/*<button>=</button>
<box>Result</box>
   <select>
   <option>+</option>
   <option>-</option>
   <option>*</option>
   <option>/</option>
 </select>*/

export default Calculator