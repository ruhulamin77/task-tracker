import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export default function TaskList({ setTaskToUpdate }) {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} setTaskToUpdate={setTaskToUpdate} />
      ))}
    </div>
  );
}
