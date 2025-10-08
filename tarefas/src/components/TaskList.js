import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList() {
  const { tasks, areAllCompleted } = useContext(TasksContext);

  if (!tasks.length) {
    return <p className="empty">Uau — sem tarefas por enquanto. Que tal adicionar uma?</p>
  }

  return (
    <section className="task-list">
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
      {areAllCompleted && <div className="all-done">Tudo pronto! Boa trabalho — hora de comemorar 🎉</div>}
    </section>
  );
}

export default TaskList;
