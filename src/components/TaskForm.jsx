import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../features/tasks/taskSlice';

export default function TaskForm() {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state.tasks.taskToUpdate);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Medium',
  });

  useEffect(() => {
    if (taskToUpdate) {
      setFormData(taskToUpdate);
    }
  }, [taskToUpdate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToUpdate) {
      dispatch(updateTask(formData));
    } else {
      dispatch(addTask(formData));
    }
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      status: 'Pending',
      priority: 'Medium',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{taskToUpdate ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}
