import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";
import NotFound from "./components/not-found/NotFound";
import GuestGuard from "./guards/GuestGuard";
import AuthGuard from "./guards/AuthGuard";

const Home = lazy(() => import("./pages/home/Home"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Todo = lazy(() => import("./pages/todo/Todo"));

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <GuestGuard>
          <Register />
        </GuestGuard>
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <GuestGuard>
          <Login />
        </GuestGuard>
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
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/todo",
        element: (
          <Suspense fallback={<Loading />}>
            <AuthGuard>
              <Todo />
            </AuthGuard>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
