import React from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardBtn } from "./button/AddTaskCardBtn";

const TaskCards = () => {
  return (
    <div className="taskCarsArea">
      <TaskCard />
      <AddTaskCardBtn />
    </div>
  );
};

export default TaskCards;
