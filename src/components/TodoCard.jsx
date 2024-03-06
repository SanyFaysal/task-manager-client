import React from "react";

export default function TodoCard({ item }) {
  return (
    <div className={`bg-gray-100 rounded px-3 py-2 w-full`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{item?.title}</h1>
        <p
          className={`px-3 text-xs py-1 rounded-full border uppercase   ${
            item?.priority == "high"
              ? " bg-red-500 text-white"
              : item?.priority == "medium"
              ? "  bg-yellow-500 text-white"
              : " bg-gray-500 text-white"
          }`}
        >
          {item?.priority}
        </p>
      </div>
      <p className="mt-2">{item?.description}</p>
    </div>
  );
}
