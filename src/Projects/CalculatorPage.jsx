import { useState } from 'react';
import style from './CalculatorPage.module.css';

function CalculatorPage
() {
  const [input, setInput] = useState('')
  const GetData = (data) => {
    if(data == "="){
      if(input[input.length - 1] == "%"){
        setInput(eval(input.slice(0, -1)/100).toString());
      }else{
        setInput(eval(input).toString());
      }
    }
    else if(data == "AC"){
      setInput("");
    }
    else if(data == "DEL"){
      setInput(input.slice(0, -1));
    }
    else{
      setInput(input + data);
    }
  }

  return (
    <div className={style.body}>
      <h2 className={style.title}>Basic Calculator</h2>
      <div className={style.calculator}>

        <input type="text" className={style.result} placeholder='0' value={input} readOnly />

        <div className={style.buttons}>
          <button className={style.ac} onClick={() => GetData("AC")}>AC</button>
          <button className={style.delete} onClick={() => GetData("DEL")}>DEL</button>
          <button className={style.operator} onClick={() => GetData("%")}>%</button>
          <button className={style.operator} onClick={() => GetData("/")}>/</button>

          <button className={style.button} onClick={() => GetData("7")}>7</button>
          <button className={style.button} onClick={() => GetData("8")}>8</button>
          <button className={style.button} onClick={() => GetData("9")}>9</button>
          <button className={style.operator} onClick={() => GetData("*")}>*</button>

          <button className={style.button} onClick={() => GetData("4")}>4</button>
          <button className={style.button} onClick={() => GetData("5")}>5</button>
          <button className={style.button} onClick={() => GetData("6")}>6</button>
          <button className={style.operator} onClick={() => GetData("-")}>-</button>

          <button className={style.button} onClick={() => GetData("1")}>1</button>
          <button className={style.button} onClick={() => GetData("2")}>2</button>
          <button className={style.button} onClick={() => GetData("3")}>3</button>
          <button className={style.operator} onClick={() => GetData("+")}>+</button>

          <button className={style.button} onClick={() => GetData("0")}>0</button>
          <button className={style.button} onClick={() => GetData(".")}>.</button>
          <button className={style.equal} onClick={() => GetData("=")}>=</button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorPage

