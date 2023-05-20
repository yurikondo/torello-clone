import React from "react";

export const TaskCardDeleteBtn = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteBtn = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteBtn"
        onClick={() => {
          taskCardDeleteBtn(taskCard.id);
        }}
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  );
};
