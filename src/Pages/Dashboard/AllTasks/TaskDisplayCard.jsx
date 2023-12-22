import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
const TaskDisplayCard = ({ task }) => {
  const { _id, title, description, deadline, priority } = task || {};
  const axiosPublic = useAxiosPublic();
  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosPublic.delete(`/allTasks/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This Task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="card text-sm border border-zinc-900/25 shadow-xl p-3">
      <div className="flex justify-center items-center gap-0">
        <img className="w-7 h-7 object-contain" src="/Resources/task.png" />
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
        <div>
          <button
            onClick={() => handleDeleteTask(_id)}
            className="btn btn-ghost btn-lg"
          >
            <FaTrashAlt className="text-red-600"></FaTrashAlt>
          </button>
          <Link to={`/dashboard/editATask/${_id}`}>
            <button className="btn btn-ghost btn-lg">
              <FaEdit className="text-blue-600"></FaEdit>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDisplayCard;
