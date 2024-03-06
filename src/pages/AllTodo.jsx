// Import necessary packages
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoContainer from "../components/TodoContainer";

// Sample data for the two lists
const initialList1 = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
];

const initialList2 = [
  { id: "4", content: "Item 4" },
  { id: "5", content: "Item 5" },
  { id: "6", content: "Item 6" },
];
const initialList3 = [
  { id: "4", content: "Item 4" },
  { id: "5", content: "Item 5" },
  { id: "6", content: "Item 6" },
];

const App = () => {
  const [list1, setList1] = useState(initialList1);
  const [list2, setList2] = useState(initialList2);
  const [list3, setList3] = useState(initialList3);

  // Function to handle the drag-and-drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList =
      result.source.droppableId === "todo"
        ? list1
        : "ongoing"
        ? list2
        : "completed"
        ? list3
        : [];
    const destinationList =
      result.destination.droppableId === "todo"
        ? list1
        : "ongoing"
        ? list2
        : "completed"
        ? list3
        : [];

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedItem);

    setList1([...list1]);
    setList2([...list2]);
    setList3([...list3]);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-5 ">
        <Droppable droppableId="todo">
          {(provided) => <TodoContainer list={list1} provided={provided} />}
        </Droppable>
        <Droppable droppableId="ongoing">
          {(provided) => <TodoContainer list={list2} provided={provided} />}
        </Droppable>
        <Droppable droppableId="completed">
          {(provided) => <TodoContainer list={list3} provided={provided} />}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
