import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useCreateTodoMutation } from "../redux/apis/todoApi";
import { DatePicker, TimePicker, message } from "antd";
import { useSelector } from "react-redux";

const CreateTodo = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { handleSubmit, control, reset } = useForm();
  const { user } = useSelector((state) => state.auth);
  const priorities = ["low", "medium", "high"];

  const [createTodo, { isSuccess, isLoading, isError, error }] =
    useCreateTodoMutation();

  const handleDate = (date, dateString) => {
    setDate(dateString);
  };
  const handleTime = (time, timeString) => {
    setTime(timeString);
  };

  const onSubmit = async (data) => {
    try {
      if (!date || !time) {
        return message.error("Please select date and time");
      }
      data.owner = user?._id;
      data.time = time;
      data.date = date;
      const res = await createTodo(data).unwrap();
      if (res) {
        message.success("Created Successful");

        reset();
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex justify-center  items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 ">
        <label>Title:</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              required
              {...field}
              className="px-3 py-2 border w-full focus:outline-blue-500 rounded mb-3"
            />
          )}
        />

        <div className="flex w-full gap-5 mb-3">
          <div className="w-full">
            <label>Dateline</label>
            <DatePicker onChange={handleDate} className="py-2 w-full " />
          </div>
          <div className="w-full">
            <label>Time</label>
            <TimePicker onChange={handleTime} className="py-2 w-full " />
          </div>
        </div>
        <label>Description:</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              required
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
              required
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
