import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

export default function TodoContainer({ list, provided, title, color }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className={`flex flex-col gap-y-2  rounded px-4 min-w-[350px]  `}
    >
      <h2 className="mb-1 text-xl ">{title}</h2>
      {list?.map((item, index) => (
        <Draggable key={item?._id} draggableId={item?._id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoCard item={item} />
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  );
}
