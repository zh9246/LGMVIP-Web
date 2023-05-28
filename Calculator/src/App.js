import React, { useState } from "react";
import "./App.css";
import { AiOutlineClear } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import { FiDivide } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { MdClear } from "react-icons/md";

function App() {
  const [result, setResult] = useState("0");
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error!");
    }
  };
  const clear = () => {
    setResult("");
  };
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  return (
    <div className="header">
      <h1>Calculator 🧮</h1>
      <div className="calculator">
        <div className="display">
          <div className="display__input">{result}</div>
        </div>
        <br />
        <div className="buttons">
          <div className="row">
            <button className="button clear function" onClick={clear}>
              <AiOutlineClear />
            </button>
            <button className="button function" onClick={backspace}>
              <FiDelete />
            </button>
            <button className="button function" onClick={handleClick} value="/">
              <FiDivide />
            </button>
          </div>
          <div className="row">
            <button className="button" onClick={handleClick} value="7">
              7
            </button>
            <button className="button" onClick={handleClick} value="8">
              8
            </button>
            <button className="button" onClick={handleClick} value="9">
              9
            </button>
            <button className="button function" onClick={handleClick} value="*">
              <MdClear />
            </button>
          </div>
          <div className="row">
            <button className="button" onClick={handleClick} value="4">
              4
            </button>
            <button className="button" onClick={handleClick} value="5">
              5
            </button>
            <button className="button" onClick={handleClick} value="6">
              6
            </button>
            <button className="button function" onClick={handleClick} value="+">
              <FiPlus />
            </button>
          </div>
          <div className="row">
            <button className="button" onClick={handleClick} value="1">
              1
            </button>
            <button className="button" onClick={handleClick} value="2">
              2
            </button>
            <button className="button" onClick={handleClick} value="3">
              3
            </button>
            <button className="button function" onClick={handleClick} value="-">
              <FiMinus />
            </button>
          </div>
          <div className="row">
            <button className="button" onClick={handleClick} value=".">
              <BsDot />
            </button>
            <button className="button" onClick={handleClick} value="0">
              0
            </button>
            <button className="button equal function" onClick={calculate}>
              <FaEquals />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
