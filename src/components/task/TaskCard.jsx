import React from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteBtn } from "./button/TaskCardDeleteBtn";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteBtn />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
