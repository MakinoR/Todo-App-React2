import React from "react";
//CSS in JSはチームのやり方によって異なるので注意。
const style = {
  backgroundColor: "aqua",
  borderRadius: "10px",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  //propsとは親コンポーネント（App.jsx）から子コンポーネント(inputTodo.jsxに値を渡すための仕組み
  const { onChange, onClick, todoText, disabled } = props;
  //分割代入！！
  return (
    //以下html形式
    <div style={style}>
      {/* onchangeで値が変わるたびにstate が変わるように設定 */}
      <input
        disabled={disabled}
        placeholder="にゅうりょくしてね"
        value={todoText}
        onChange={onChange}
        //{}の中身が親から渡されたprops.onChange なので、App.jsxのonChangeTodoTextが渡される
      />
      <button disabled={disabled} onClick={onClick}>
        Add
      </button>
    </div>
  );
};

// export default InputTodos;
