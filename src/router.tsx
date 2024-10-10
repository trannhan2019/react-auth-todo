import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
// import Loading from "./components/Loading/Loading";

const Todo = lazy(() => import("./pages/todo/Todo"));

const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
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
