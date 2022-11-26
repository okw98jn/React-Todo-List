import React from "react";

const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div className="input_area">
      <h2>Todoを入力</h2>
      <input
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>入力する</button>
    </div>
  );
};

export default InputTodo;
