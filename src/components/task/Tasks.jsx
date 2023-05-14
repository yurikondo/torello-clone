import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える。レッスン38
  //動かしたタスクを削除
  const remove = taskList.splice(startIndex, 1); //[2,3]
  //動かしたタスクを移動さきに挿入
  taskList.splice(endIndex, 0, remove[0]); //[1,2,3]
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      {/* onDragEndはドラッグが終わった時 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
