import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function TaskPage() {
  return (
    <div className="task-container">
      <TaskForm />
      <TaskList />
    </div>
  );
}
