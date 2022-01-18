import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

function Todo({ text, todos, todo, setTodos }) {
  const deleteItem = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const complete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <div className={todo.completed ? "completed" : "not"}> {text}</div>
      <DoneIcon onClick={complete} className="icon" />
      <CloseIcon onClick={deleteItem} className="icon" />
    </div>
  );
}

export default Todo;
