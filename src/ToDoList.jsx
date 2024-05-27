import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: uuidv4(), text: newTask, completed: false, date: Date.now() },
      ]);
      setNewTask("");
    }
  }

  function startEditTask(index) {
    setEditIndex(index);
    setEditTask(tasks[index].text);
  }

  function handleEditChange(event) {
    setEditTask(event.target.value);
  }

  function saveEditTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editTask } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleCompleteTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <TaskList
        tasks={tasks}
        editIndex={editIndex}
        editTask={editTask}
        handleEditChange={handleEditChange}
        saveEditTask={saveEditTask}
        deleteTask={deleteTask}
        startEditTask={startEditTask}
        toggleCompleteTask={toggleCompleteTask}
      />
    </div>
  );
}

export default ToDoList;
