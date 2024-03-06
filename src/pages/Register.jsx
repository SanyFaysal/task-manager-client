import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/apis/authApi";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerAccount, { isSuccess, isError, error }] =
    useRegisterMutation();

  const onFinish = async (data) => {
    try {
      const res = await registerAccount(data).unwrap();
      if (res) {
        localStorage.setItem("accessToken", res?.token);
        dispatch(setUser(res?.data));
        navigate(`/${res?.data?.accountType}`);
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
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          label="Profession"
          name="profession"
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
            Don't have any account ? <Link to={"/login"}>Login</Link>{" "}
          </div>{" "}
          "
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}
