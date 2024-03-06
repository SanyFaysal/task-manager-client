import { Badge, message } from "antd";
import React, { useEffect } from "react";
import {
  ClockCircleOutlined,
  ScheduleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDeleteTaskMutation } from "../redux/apis/todoApi";

export default function TodoCard({ item }) {
  const [deleteTask, { isSuccess }] = useDeleteTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      message.success("Deletion Success");
    }
  }, [isSuccess]);
  return (
    <Badge.Ribbon
      text={item?.priority}
      color={
        item?.priority === "high"
          ? "red"
          : item?.priority === "medium"
          ? "orange"
          : item?.priority === "low"
          ? ""
          : ""
      }
      className="uppercase"
    >
      <div className={`bg-gray-100 rounded px-3 py-2 w-full`}>
        <div>
          <h1 className="text-xl">{item?.title}</h1>
        </div>
        <p className="mt-2">{item?.description}</p>
        <div className="flex justify-between items-center mt-4">
          <Badge
            count={
              true ? (
                <p className="text-md">
                  <ScheduleOutlined
                    style={{ color: "orange" }}
                    className="ml-2 mr-1"
                  />
                  {item?.date}
                  <ClockCircleOutlined
                    style={{ color: "#f5222d" }}
                    className="ml-3 mr-1"
                  />{" "}
                  {item?.time}
                </p>
              ) : (
                0
              )
            }
          />

          <button className="text-lg">
            {" "}
            <DeleteOutlined
              className="text-red-500"
              onClick={() => deleteTask({ taskId: item?._id })}
            />
          </button>
        </div>
      </div>
    </Badge.Ribbon>
  );
}
