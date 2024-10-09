import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Image,
  Tabs,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import fbIcon from "../../assets/facebook-48.svg";
import {
  Icon360View,
  IconBookmarkEdit,
  IconGrid4x4,
  IconHome,
  IconMenu4,
  IconMessage,
  IconSearch,
  IconUsersGroup,
  IconVideo,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <Box h={56} component="header">
      <Group h={"100%"} justify="space-between">
        <Box>
          <Group>
            <Image src={fbIcon} />
            <TextInput
              leftSection={<IconSearch size={16} />}
              radius={"lg"}
              placeholder="Tìm kiếm trên Facebook"
            />
          </Group>
        </Box>
        <Box visibleFrom="md">
          <Center>
            <Tabs defaultValue={"Home"} variant="default">
              <Tabs.List>
                <Tabs.Tab value="Home" w={110}>
                  <IconHome size={26} />
                </Tabs.Tab>
                <Tabs.Tab value="Friends" w={110}>
                  <IconUsersGroup size={26} />
                </Tabs.Tab>
                <Tabs.Tab value="Video" w={110}>
                  <IconVideo size={26} />
                </Tabs.Tab>
                <Tabs.Tab value="Maket" w={110}>
                  <IconBookmarkEdit size={26} />
                </Tabs.Tab>
                <Tabs.Tab value="People" w={110}>
                  <Icon360View size={26} />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Center>
        </Box>
        <Box>
          <Group>
            <Avatar component="a">
              <IconGrid4x4 size={26} color="black" />
            </Avatar>
            <Avatar component="a">
              <IconMessage size={26} color="black" />
            </Avatar>
            <Avatar component="a">
              <IconGrid4x4 size={26} color="black" />
            </Avatar>
            <Avatar component="a">
              <IconGrid4x4 size={26} color="black" />
            </Avatar>
          </Group>
        </Box>
      </Group>
    </Box>
  );
};

export default Header;
