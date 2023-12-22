import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcAddDatabase } from "react-icons/fc";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth"; // Removed unused import

const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const taskData = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      addedByUser: user.email,
    };
    console.log(taskData);
    try {
      const taskRes = await axiosPublic.post("/allTasks", taskData);
      console.log(taskRes.data);

      if (taskRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} task has been created.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-black py-10">
        Create A New Task.
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title*</span>
            </label>
            <input
              type="text"
              placeholder="title of the task"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Priority*</span>
            </label>
            <select
              defaultValue="Moderate"
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="Moderate">Select priority</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Deadline*</span>
            </label>
            <input
              type="date"
              placeholder="Enter date"
              {...register("deadline", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <input
              type="text"
              placeholder="Task description"
              {...register("description", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn">
            Create the task. <FcAddDatabase className="ml-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
