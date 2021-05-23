import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="にゅうりょくしてね" />
        <button>Add</button>
      </div>
      <div>
        <ul>
          <li>達成項目</li>
          <button>Complete</button>
          <button>Delete</button>
        </ul>
      </div>
      <div></div>
    </>
  );
};
