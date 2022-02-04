import React, {useState} from "react"

const Input = () => {
  const [num, setNum] = useState(0)

  const handleNum = event => {
    setNum(event.target.value)
  }
    return (<div>
   <input type='text' onChange={handleNum}/>
   <div>{num}</div>
 </div>) 
}

export default Input