import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardBtn } from "./button/AddTaskCardBtn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: "0", draggableId: "item0" },
  ]);

  return (
    <DragDropContext>
      {/* direction="horizontal" 垂直方向 */}
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCarsArea"
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
