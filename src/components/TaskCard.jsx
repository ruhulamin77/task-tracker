import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, taskToUpdate } from '../features/tasks/taskSlice';
import { CiCalendarDate } from 'react-icons/ci';
import { CgSandClock } from 'react-icons/cg';
import { MdEdit, MdOutlineLowPriority } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

export default function TaskCard({ task }) {
  const dispatch = useDispatch();
  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
      toast.success('Task deleted!');
    }
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
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
        <p className="task-status">
          <span style={dueDateStyle}>
            <CiCalendarDate /> {task.dueDate}
          </span>
          <span style={statusStyle}>
            <CgSandClock /> {task.status}
          </span>
          <span style={priorityStyle}>
            <MdOutlineLowPriority /> {task.priority}
          </span>
        </p>
      </div>
      <div className="task-action-area">
        <button className="edit" onClick={() => handleEdit(task)}>
          <MdEdit />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
