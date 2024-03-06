import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full h-[75vh]">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="w-1/3"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="flex justify-between w-full">
          <div className="">
            Don't have any account ? <Link to={"/register"}>Register</Link>{" "}
          </div>{" "}
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}
