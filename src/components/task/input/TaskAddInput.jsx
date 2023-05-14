import React from "react";
// https://www.npmjs.com/package/uuid/v/8.3.0
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    // ユニークなIdを生成
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") return;

    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        ></input>
      </form>
    </div>
  );
};
