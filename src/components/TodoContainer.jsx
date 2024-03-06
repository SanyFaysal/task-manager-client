import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
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

export default function TodoContainer({ list, provided }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className="flex flex-col gap-y-2"
    >
      <h2 className="mb-3 text-xl ">Todo List</h2>
      {list?.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoCard />
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  );
}
