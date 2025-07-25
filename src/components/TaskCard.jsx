import React from 'react';

export default function TaskCard({ task, setTaskToUpdate }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        {task.dueDate} | {task.status} | {task.priority}
      </p>
      <button className="edit" onClick={() => setTaskToUpdate(task)}>
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
}
