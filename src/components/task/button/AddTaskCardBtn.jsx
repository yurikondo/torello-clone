import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardBtn = ({ taskCardsList, setTaskCardsList }) => {
  const taskCardId = uuid();

  const AddTaskCard = () => {
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardBtnArea">
      <button className="addTaskCardBtn" onClick={AddTaskCard}>
        +
      </button>
    </div>
  );
};
