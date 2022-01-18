import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Todolist from "./Todolist";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [option, setOption] = useState("All");
  const [change, setChange] = useState([]);

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    changeOptions();
    saveToLocal();
  }, [todos, option]);

  const changeOptions = () => {
    switch (option) {
      case "Finished":
        setChange(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );

        break;

      case "Incomplete":
        setChange(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;

      default:
        setChange(todos);
        break;
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        option={option}
        setOption={setOption}
      />
      <Todolist todos={todos} setTodos={setTodos} change={change} />
    </div>
  );
}

export default App;
