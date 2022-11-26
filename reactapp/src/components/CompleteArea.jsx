import React from "react";

const CompleteArea =(props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete_area">
      <h2>完了したTodo</h2>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CompleteArea;
