import React from "react";
import Task from "./Task";

function TaskList({ tasks, editIndex, editTask, handleEditChange, saveEditTask, deleteTask, startEditTask, toggleCompleteTask }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          editIndex={editIndex}
          editTask={editTask}
          handleEditChange={handleEditChange}
          saveEditTask={saveEditTask}
          deleteTask={deleteTask}
          startEditTask={startEditTask}
          toggleCompleteTask={toggleCompleteTask}
        />
      ))}
    </ol>
  );
}

export default TaskList;
