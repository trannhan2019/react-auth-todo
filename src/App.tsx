import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NavigationProgress } from "@mantine/nprogress";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <AuthProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <RouterProvider router={router} />
          <NavigationProgress />
          <Notifications position="top-right" />
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
