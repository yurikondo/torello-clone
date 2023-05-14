import React from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardBtn } from "./button/AddTaskCardBtn";

const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardBtn />
    </div>
  );
};

export default TaskCards;
