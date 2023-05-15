import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardBtn } from "./button/AddTaskCardBtn";

const TaskCards = () => {
  const [taskCardLists, setTaskCardLists] = useState([
    { id: 0, draggableId: "item0" },
  ]);

  return (
    <div className="taskCarsArea">
      {taskCardLists.map((taskCardList) => (
        <TaskCard key={taskCardList.id} />
      ))}
      <AddTaskCardBtn
        taskCardLists={taskCardLists}
        setTaskCardLists={setTaskCardLists}
      />
    </div>
  );
};

export default TaskCards;
