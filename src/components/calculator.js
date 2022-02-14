import React, {useState} from "react";

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [selectedOperator, setSelectedOperator] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
 
  const isValidCalculation = () =>
    !Number.isNaN(Number(num1)) &&
    !Number.isNaN(Number(num2)) &&
    num1 !== "" && num2 !== ""
  

  const calculate = () => {
    if (!isValidCalculation()) {
      setResult('')
      return setError('Error, invalid inputs. Please try again')
    }
    setError('')
    setResult('')
    switch(selectedOperator) {
      case '+':
        return setResult((Number(num1)) + (Number(num2)))
      case '-':
        return setResult((Number(num1)) - (Number(num2)))
      case '*':
        return setResult((Number(num1)) * (Number(num2)))
      case '/':
        return setResult((Number(num1)) / (Number(num2)))
      default:
        setResult('')
        return setError('Error, please try again')
    }
  } 
  return(
    <div className="calculator">
      <input name="Enter number" value={num1} onChange={event => setNum1(event.target.value)}/><div>{num1}</div>
      <select value={selectedOperator} onChange={(event) => setSelectedOperator(event.target.value)}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <input name="Enter number" value={num2} onChange={event => setNum2(event.target.value)} /><div>{num2}</div>
      <input type="button" value="=" onClick={calculate}/>
      <div>{result}</div>
      <div>{error}</div>
    </div>
  )
}

export default Calculator