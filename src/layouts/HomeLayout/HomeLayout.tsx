import { AppShell } from "@mantine/core";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <AppShell header={{ height: 56 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main pos={"relative"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default HomeLayout;
