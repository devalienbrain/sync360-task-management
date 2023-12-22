import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskDisplayCard from "./TaskDisplayCard";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskDragDrop = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState({
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: [],
    },
    ongoing: {
      id: "ongoing",
      title: "Ongoing",
      taskIds: [],
    },
    completed: {
      id: "completed",
      title: "Completed",
      taskIds: [],
    },
  });
  const [loading, setLoading] = useState(true);

  const currentDate = new Date(); // Get the current date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/allTasks");
        const tasksAllData = response.data;

        // Distribute tasks among columns based on the deadline
        const updatedColumns = {
          todo: { ...columns.todo, taskIds: [] },
          ongoing: { ...columns.ongoing, taskIds: [] },
          completed: { ...columns.completed, taskIds: [] },
        };

        tasksAllData.forEach((task) => {
          const deadlineDate = new Date(task.deadline);

          if (currentDate.getTime() === deadlineDate.getTime()) {
            updatedColumns.ongoing.taskIds.push(task._id);
          } else if (currentDate > deadlineDate) {
            updatedColumns.completed.taskIds.push(task._id);
          } else {
            updatedColumns.todo.taskIds.push(task._id);
          }
        });

        setColumns(updatedColumns);
        setTasks(tasksAllData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [
    axiosPublic,
    columns.todo,
    columns.ongoing,
    columns.completed,
    currentDate,
  ]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      setColumns({
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Drag-Drop Tasks</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center p-10">
        <div>
          <h1 className="text-3xl md:text-7xl text-center font-black py-10">
            Your Tasks.
          </h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(columns).map((columnId) => {
              const column = columns[columnId];
              const tasksInColumn = column.taskIds.map((taskId) =>
                tasks.find((task) => task._id === taskId)
              );

              return (
                <div key={column.id} className="min-h-screen">
                  <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
                  <Droppable droppableId={column.id} key={column.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ${
                          snapshot.isDraggingOver ? "bg-gray-200" : ""
                        }`}
                      >
                        {tasksInColumn.map((task, index) => (
                          <Draggable
                            key={task._id}
                            draggableId={task._id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskDisplayCard task={task}></TaskDisplayCard>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default TaskDragDrop;
