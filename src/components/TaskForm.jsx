import { useEffect, useState } from 'react';
import { LuNotebookPen } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addTask, updateTask } from '../features/tasks/taskSlice';

export default function TaskForm() {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state.tasks.taskToUpdate);

  // initial task form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Medium',
  });

  // re initialize the formData if user want to update the task
  useEffect(() => {
    if (taskToUpdate) {
      setFormData(taskToUpdate);
    }
  }, [taskToUpdate]);

  // on change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // task add and update handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return toast.error('Title is required!');
    if (taskToUpdate) {
      dispatch(updateTask(formData));
      toast.success('Task updated!');
    } else {
      dispatch(addTask(formData));
      toast.success('New task added!');
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
    <form onSubmit={handleSubmit} className="task-form">
      <h2>
        <LuNotebookPen /> Task Tracker
      </h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
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
