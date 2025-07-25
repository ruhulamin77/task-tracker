import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, taskToUpdate } from '../features/tasks/taskSlice';

export default function TaskCard({ task }) {
  const dispatch = useDispatch();
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (task) => {
    dispatch(taskToUpdate(task));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Conditional styles
  const statusStyle = {
    color:
      task.status === 'Completed'
        ? '#0b9560'
        : task.status === 'Pending'
        ? '#dc3545'
        : '#ffc107',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const priorityStyle = {
    color:
      task.priority === 'High'
        ? '#dc3545'
        : task.priority === 'Medium'
        ? '#ffc107'
        : '#0b9560',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const dueDateStyle = {
    color: new Date(task.dueDate) < new Date() ? '#dc3545' : '#018862',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  return (
    <div className="task-card">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>
          <span style={dueDateStyle}>{task.dueDate}</span>
          <span style={statusStyle}>{task.status}</span>
          <span style={priorityStyle}>{task.priority}</span>
        </p>
      </div>
      <div className="task-action-area">
        <button className="edit" onClick={() => handleEdit(task)}>
          Edit
        </button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
