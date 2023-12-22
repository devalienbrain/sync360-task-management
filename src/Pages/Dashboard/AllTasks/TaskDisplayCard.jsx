const TaskDisplayCard = ({ task }) => {
  const { _id, title, description, deadline, priority } = task || {};
  return (
    <div className="card text-sm border border-zinc-900/25 shadow-xl p-3">
      <div className="flex justify-center items-center gap-0">
        <img
          className="w-7 h-7 object-contain"
          src="../../../../public/Resources/task.png"
        />
        <h2 className="card-title bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <div className="card-body text-center">
        <p>
          Task Description: <span className="text-sm">{description}</span>{" "}
        </p>
        <p>
          <span className="font-bold">Task priority: {priority}</span>{" "}
        </p>

        <p className="font-bold bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent">
          Task Deadline: {deadline}
        </p>
      </div>
    </div>
  );
};

export default TaskDisplayCard;
