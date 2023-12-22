const TaskList = ({ tasks, removeTask }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border p-2 mb-2"
          >
            {task.text}
            <button
              className="bg-red-500 text-white p-2 ml-2"
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
