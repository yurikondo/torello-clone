import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardBtn } from "./button/AddTaskCardBtn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskCardsList, startIndex, endIndex) => {
  // タスクを並び替える。レッスン38
  //動かしたタスクを削除
  const remove = taskCardsList.splice(startIndex, 1); //[2,3]
  //動かしたタスクを移動さきに挿入
  taskCardsList.splice(endIndex, 0, remove[0]); //[1,2,3]
};

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: "0", draggableId: "item0" },
  ]);

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* direction="horizontal" 垂直方向 */}
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardBtn
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
