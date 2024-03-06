import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isSuccess, isLoading, isError, error }] =
    useLoginMutation();

  const onFinish = async (values) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res) {
        localStorage.setItem("accessToken", res?.token);
        dispatch(setUser(res?.data));
        navigate(`/`);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-[75vh]">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
