import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };
  const handleClick = () => {
    setItems((prev) => {
      return [...prev, currentValue];
    });

    setCurrentValue("");
  };

  const handleCheck =(event)=>{
    console.log(event)
  }

  return (
    <div className="main-container">
      <h2>To do list !!</h2>
      <div className="input-container">
        <input
          placeholder="Add new item"
          onChange={handleChange}
          value={currentValue}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="to-do-lits-container">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={index} onChange={handleCheck}/>
              <label>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
