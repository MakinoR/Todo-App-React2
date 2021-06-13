// import React from "react";
import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  // 分割代入でわかりやすく！！
  const [todoText, setTodoText] = useState("");
  // useStateの第２引数は、第一引数のstateを更新していく関数を記述する
  //useStateの中身は第一引数の初期値になるよーん
  const [incompleteTodos, setIncompleteTodos] = useState([
    // "ああああああ",
    // "いいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    // "ああああああ",
    // "いいいいいいい"
  ]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // console.log(index);
  };

  const onClickComplete = (index) => {
    // console.log(index);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    //未完了のエリアから選択した項目を削除、それを完了エリアに追加。それぞれのStateを更新
  };
  const onClickReturn = (index) => {
    // console.log(index);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    //未完了のエリアから選択した項目を削除、それを完了エリアに追加。それぞれのStateを更新
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // alert(todoText);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplete-area">
        <p className="title">未完のリスト</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              //ループ内で目印をつける。mapとかで繰り替え処理するときに必須？？
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>
                    Complete
                  </button>
                  <button onClick={() => onClickDelete(index)}>Delete</button>
                  {/* イベントハンドラに引数を入れたいときはアロー関数にしないと勝手に実行されるよーん */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>comp!!</button>
                  <button onClick={() => onClickReturn(index)}>return</button>
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
