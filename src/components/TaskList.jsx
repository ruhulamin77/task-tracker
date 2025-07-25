import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
