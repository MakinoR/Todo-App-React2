// import React from "react";
import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // alert(todoText);
  };

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

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
        //trueの時にdisabled発動してるけど、この表記は慣れないな・・・
        //htmlのdisabledはtrueかfalseかを入力するものではないが、JSを組み込むとtrueかfalseかで判定できるようになる？
      />
      {/* &&→左がtrueなら右を返す！！ */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>Todo溜まりすぎ〜。消化せよ！！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />

      <div></div>
    </>
  );
};
