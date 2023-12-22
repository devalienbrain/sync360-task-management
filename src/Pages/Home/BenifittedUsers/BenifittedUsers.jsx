import { useState } from "react";

const BenifittedUsers = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const audienceData = [
    {
      title: "Developers",
      description: "Organize your coding tasks and projects efficiently.",
    },
    {
      title: "Corporate Professionals",
      description: "Keep track of your daily tasks and deadlines at work.",
    },
    {
      title: "Bankers",
      description: "Manage financial tasks and important banking activities.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do Task Management Users</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2 text-black"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* <TaskList tasks={tasks} removeTask={removeTask} /> */}

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audienceData.map((audience, index) => (
            <div key={index} className="bg-gray-200/50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
              <p>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenifittedUsers;
