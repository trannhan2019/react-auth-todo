import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Todo from "./pages/todo/Todo";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
