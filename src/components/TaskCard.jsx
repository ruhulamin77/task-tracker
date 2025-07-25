import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

export default function TaskCard({ task, setTaskToUpdate }) {
  const dispatch = useDispatch();
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

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
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}
