import React from "react"

const Input = () => {
 return <div>
   <input type='text'/>
   <select>
     <option>+</option>
     <option>-</option>
     <option>*</option>
     <option>/</option>
   </select>
   <input type='text'/>
   <button>=</button>
   <box>Result</box>
 </div> 
}

export default Input