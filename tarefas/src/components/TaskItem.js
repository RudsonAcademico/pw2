import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import './TaskItem.css';

function TaskItem({ task }) {
  const { toggleTask, removeTask } = useContext(TasksContext)

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        <span>{task.title}</span>
      </label>
      <button className="remove-btn" onClick={() => removeTask(task.id)}>Apagar</button>
    </li>
  );
}

export default TaskItem;
