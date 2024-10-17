import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
} from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import MetaLogo from "../../../../assets/meta-48.svg";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <Box component="header" h={56} px={"md"}>
        <Group justify="space-between" h="100%">
          <Image src={MetaLogo} width={48} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink to={"/"} className={classes.link}>
              Home
            </NavLink>
            <NavLink to={"/todo"} className={classes.link}>
              Todo
            </NavLink>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" component={Link} to={"/login"}>
              Log in
            </Button>
            <Button component={Link} to={"/register"}>
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <NavLink to={"/"} className={classes.link}>
            Home
          </NavLink>
          <NavLink to={"/todo"} className={classes.link}>
            Todo
          </NavLink>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" component={Link} to={"/login"}>
              Log in
            </Button>
            <Button component={Link} to={"/register"}></Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
