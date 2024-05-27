import React from "react";

function Task({ task, index, editIndex, editTask, handleEditChange, saveEditTask, deleteTask, startEditTask, toggleCompleteTask }) {
  return (
    <li>
      {editIndex === index ? (
        <div>
          <input
            type="text"
            value={editTask}
            onChange={handleEditChange}
          />
          <button
            className="save-button action-button"
            onClick={() => saveEditTask(index)}
          >
            Save
          </button>
        </div>
      ) : (
        <span
          className="text"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
          <span className="date">
            {new Date(task.date).toLocaleDateString()}
          </span>
        </span>
      )}
      <button
        className="delete-button action-button"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
      {editIndex !== index && (
        <>
          <button
            className="edit-button action-button"
            onClick={() => startEditTask(index)}
          >
            Edit
          </button>
          <button
            className="complete-button action-button"
            onClick={() => toggleCompleteTask(index)}
          >
            {task.completed ? "Unmark" : "Complete"}
          </button>
        </>
      )}
    </li>
  );
}

export default Task;
