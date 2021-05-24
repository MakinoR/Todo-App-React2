import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="にゅうりょくしてね" />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完のリスト</p>
        <ul>
          <li>
            <div className="list-row">
              <p>未達成項目</p>
              <button>Complete</button>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          <li>
            <div className="list-row">
              <p>達成項目</p>
              <button>return</button>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
};
