import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    // task.id !== idがtrueの値だけtaskListに戻す＝削除したタスク以外を保存
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashBtn" onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
