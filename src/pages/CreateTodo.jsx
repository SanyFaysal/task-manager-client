import React from "react";
import { useForm, Controller } from "react-hook-form";

const CreateTodo = () => {
  const { handleSubmit, control, reset } = useForm();
  const [todos, setTodos] = React.useState([]);
  const priorities = ["low", "high"];
  const statuses = ["ongoing", "completed", "todo"];

  const onSubmit = (data) => {
    setTodos((prevTodos) => [...prevTodos, data]);
    reset();
  };

  return (
    <div className="flex justify-center  items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 ">
        <label>Title:</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="px-3 py-2 border w-full focus:outline-blue-500 rounded mb-3"
            />
          )}
        />

        <label>Description:</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="px-3 py-2 border w-full focus:outline-blue-500 rounded mb-3"
            />
          )}
        />

        <label>Priority:</label>
        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="px-3 py-2 border w-full focus:outline-blue-500 rounded mb-3"
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          )}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-3 py-2 rounded text-white bg-blue-500 mt- "
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Lists rendering remains the same */}
    </div>
  );
};

export default CreateTodo;
