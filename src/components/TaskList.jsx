import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <h3 className="not-task-found">You haven't added any tasks yet.</h3>
      )}
    </div>
  );
}
