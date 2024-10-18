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
  Container,
  Menu,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import MetaLogo from "../../../../assets/meta-48.svg";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useAuthStore } from "../../../../stores/auth";
import { ProfileType } from "../../../../types/user.type";
import {
  IconChevronDown,
  IconPower,
  IconUserCircle,
} from "@tabler/icons-react";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { isAuth, profile, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box>
      <Box component="header" h={56} px={"md"}>
        <Container size={"lg"} h={"100%"}>
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

            {isAuth ? (
              <UserMenu profile={profile} handleLogout={handleLogout} />
            ) : (
              <Group visibleFrom="sm">
                <Button component={NavLink} to={"/login"} variant="default">
                  Log in
                </Button>
                <Button component={NavLink} to={"/register"}>
                  Sign up
                </Button>
              </Group>
            )}

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
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

          {isAuth ? (
            <UserMenu profile={profile} />
          ) : (
            <Group justify="center" grow pb="xl" px="md">
              <Button component={NavLink} to={"/login"} variant="default">
                Log in
              </Button>
              <Button component={NavLink} to={"/register"}>
                Sign up
              </Button>
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

type UserMenuProps = {
  profile: ProfileType | null;
  handleLogout: () => void;
};
const UserMenu = ({ profile, handleLogout }: UserMenuProps) => {
  return (
    <Menu
      width={200}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
    >
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Text>{profile?.name}</Text>
            <IconChevronDown
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconUserCircle
              style={{ width: rem(16), height: rem(16) }}
              color="red"
              stroke={1.5}
            />
          }
        >
          Profile
        </Menu.Item>
        <Menu.Item
          onClick={handleLogout}
          leftSection={
            <IconPower
              style={{ width: rem(16), height: rem(16) }}
              color="red"
              stroke={1.5}
            />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
