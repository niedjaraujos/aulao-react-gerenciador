import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks(
  { tasks, onTaskClick, onDeleteTaskClick } //props
) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // navigate(`/task?title=${task.title}&description=${task.description}`);
    //modo mais seguro, ja faz um tratamento para evitar conflitos
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-slate-400 text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
