// Import necessary packages
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoContainer from "../components/TodoContainer";
import {
  useGetAllTodoQuery,
  useUpdateTaskMutation,
} from "../redux/apis/todoApi";
import { message } from "antd";
import { useLocation } from "react-router-dom";

// Sample data for the two lists

const AllTodos = () => {
  const pathname = useLocation();
  console.log({ pathname });
  const token = localStorage.getItem("accessToken");
  const { data, isSuccess } = useGetAllTodoQuery({ token });
  const [updateTask, { isSuccess: isSucc }] = useUpdateTaskMutation();
  const allTodo = data?.data;
  const todo = allTodo?.filter((item) => item?.status === "todo") || [];
  const ongoing = allTodo?.filter((item) => item?.status === "ongoing") || [];

  const completed =
    allTodo?.filter((item) => item?.status === "completed") || [];

  const [list1, setList1] = useState(todo);
  const [list2, setList2] = useState(ongoing);
  const [list3, setList3] = useState(completed);

  // Function to handle the drag-and-drop
  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const sourceList =
      result.source.droppableId === "todo"
        ? list1
        : result.source.droppableId === "ongoing"
        ? list2
        : result.source.droppableId === "completed"
        ? list3
        : list3;

    const destinationList =
      result.destination.droppableId === "todo"
        ? list1
        : result.destination.droppableId === "ongoing"
        ? list2
        : result.destination.droppableId === "completed"
        ? list3
        : list3;

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedItem);

    try {
      const taskId = movedItem?._id;
      const data = {
        status: result.destination.droppableId,
      };
      const res = await updateTask({ taskId, data });
      if (res) {
        message.success("Updated");
      }
    } catch (error) {}
  };

  useEffect(() => {
    setList1(todo);
    setList2(ongoing);
    setList3(completed);
  }, [isSuccess, data]);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-2 overflow-x-auto pb-10">
        <Droppable droppableId="todo">
          {(provided) => (
            <TodoContainer
              list={list1}
              provided={provided}
              title={"Todo List"}
            />
          )}
        </Droppable>
        <Droppable droppableId="ongoing">
          {(provided) => (
            <TodoContainer
              list={list2}
              provided={provided}
              title={"Ongoing List"}
            />
          )}
        </Droppable>
        <Droppable droppableId="completed">
          {(provided) => (
            <TodoContainer
              list={list3}
              provided={provided}
              title={"Completed List"}
              color="green"
            />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default AllTodos;
