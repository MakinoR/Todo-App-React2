import React from "react";

export const InputTodo = (props) => {
  const { onChange, onClick, todoText } = props;
  return (
    <div className="input-area">
      {/* onchangeで値が変わるたびにstate が変わるように設定 */}
      <input
        placeholder="にゅうりょくしてね"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

// export default InputTodos;
