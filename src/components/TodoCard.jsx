import React from "react";

export default function TodoCard() {
  return (
    <div className="bg-gray-100 rounded px-3 py-2 w-[300px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Title</h1>
        <p className="px-2 py-1 rounded-full border">Priority</p>
      </div>
      <p>Descripton Lorem ipsum</p>
    </div>
  );
}
