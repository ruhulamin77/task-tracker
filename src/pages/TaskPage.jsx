import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function TaskPage() {
  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
  );
}
