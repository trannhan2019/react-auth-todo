import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/home/Home"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Todo = lazy(() => import("./pages/todo/Todo"));

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <Register />{" "}
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            {" "}
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/todo",
        element: (
          <Suspense fallback={<Loading />}>
            <Todo />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
