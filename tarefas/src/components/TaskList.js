import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList() {
  const { tasks, areAllCompleted } = useContext(TasksContext);

  if (!tasks.length) {
    return <p className="empty">Nenhuma tarefa cadastrada. Adicione uma acima.</p>;
  }

  return (
    <section className="task-list">
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
      {areAllCompleted && <div className="all-done">Parabéns! Todas as tarefas foram concluídas 🎉</div>}
    </section>
  );
}

export default TaskList;
