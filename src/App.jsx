// import React from "react";
import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 分割代入でわかりやすく！！
  const [todoText, setTodoText] = useState("");
  // useStateの第２引数は、第一引数のstateを更新していく関数を記述する
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああああ",
    "いいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ああああああ",
    "いいいいいいい"
  ]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    alert(todoText);
  };
  return (
    <>
      <div className="input-area">
        {/* onchangeで値が変わるたびにstate が変わるように設定 */}
        <input
          placeholder="にゅうりょくしてね"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完のリスト</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              //ループ内で目印をつける。mapとかで繰り替え処理するときに必須？？
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>Complete</button>
                  <button>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>return</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
