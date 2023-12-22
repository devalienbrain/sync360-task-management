import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskDisplayCard from "./TaskDisplayCard";

const AllTasks = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [loading, setLoading] = useState(true);

  const currentDate = new Date(); // Get the current date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/allTasks");
        const tasksAllData = response.data;
        setTasks(tasksAllData);
        applyFilters(tasksAllData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const applyFilters = (tasksData) => {
    let filteredResult = tasksData.filter((task) => {
      const deadlineDate = new Date(task.deadline);
      if (currentDate.getTime() === deadlineDate.getTime()) {
        return selectedCategory === "ongoing" || selectedCategory === "default";
      } else if (currentDate > deadlineDate) {
        return (
          selectedCategory === "completed" || selectedCategory === "default"
        );
      } else {
        return selectedCategory === "todo" || selectedCategory === "default";
      }
    });
    setFilteredTasks(filteredResult);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    applyFilters(tasks);
  }, [tasks, selectedCategory]);

  return (
    <div>
      <Helmet>
        <title>Dashboard | Your Tasks</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center p-10">
        <div>
          <h1 className="text-3xl md:text-7xl text-center font-black py-10">
            Your Tasks.
          </h1>
          <select
            id="category"
            name="category"
            className="input input-bordered rounded-xl drop-shadow-lg w-full px-5"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="default">All Tasks List</option>
            <option value="todo">To Do List</option>
            <option value="ongoing">Ongoing List</option>
            <option value="completed">Completed List</option>
          </select>

          <p className="py-7 text-center text-red-900 font-semibold">
            Total = {filteredTasks.length}
          </p>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredTasks.map((task) => (
                <TaskDisplayCard key={task._id} task={task}></TaskDisplayCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
