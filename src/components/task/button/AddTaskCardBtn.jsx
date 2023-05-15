import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardBtn = ({ taskCardLists, setTaskCardLists }) => {
  const taskCardId = uuid();

  const AddTaskCard = () => {
    setTaskCardLists([
      ...taskCardLists,
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
