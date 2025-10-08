import React, { createContext, useState, useMemo } from 'react';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Reunião rápida com o time', completed: false },
    { id: 2, title: 'Revisar pull request', completed: false },
  ]);

  const addTask = (title) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const areAllCompleted = useMemo(() => tasks.length > 0 && tasks.every((t) => t.completed), [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, removeTask, areAllCompleted }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
