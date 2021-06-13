import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    //以下html形式
    <div className="incomplete-area">
      <p className="title">未完のリスト</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            //ループ内で目印をつける。mapとかで繰り替え処理するときに必須？？
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
                {/* イベントハンドラに引数を入れたいときはアロー関数にしないと勝手に実行されるよーん */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
