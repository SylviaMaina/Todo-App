import React from "react";
import Todo from "./Todo";

function Todolist({ todos, setTodos, change }) {
  return (
    <div className="list-container">
      <div className="todos">
        {change.map((todo, index) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              text={todo.text}
              id={todo.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
