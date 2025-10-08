import React, { useState, useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import './TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
