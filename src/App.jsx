import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "./redux/apis/authApi";
import { setUser } from "./redux/slices/authSlice";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const { data } = useGetMeQuery(token);

  useEffect(() => {
    if (token && data?.data) {
      dispatch(setUser(data?.data));
    }
    if (!token) {
      dispatch(setUser({}));
    }
  }, [data?.data, token]);
  return <RouterProvider router={router} />;
}

export default App;
