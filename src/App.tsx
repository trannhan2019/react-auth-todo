import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

import { NavigationProgress } from "@mantine/nprogress";

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
      <NavigationProgress />
      <Notifications />
    </MantineProvider>
  );
}

export default App;
