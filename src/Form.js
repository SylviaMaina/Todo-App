import React from "react";

function Form({ inputText, setInputText, todos, setTodos, option, setOption }) {
  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const selectChange = (e) => {
    setOption(e.target.value);
  };

  const inputSubmit = () => {
    if (inputText === "") {
      return;
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <div className="input-button">
        <input
          type="text"
          value={inputText}
          onChange={inputChange}
          placeholder="What are you doing today?"
        />
        <button onClick={inputSubmit}>Add</button>
      </div>

      <div className="select">
        <select name="todos" onChange={selectChange} className="filter">
          <option value="All">All</option>
          <option value="Finished">Finished</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
