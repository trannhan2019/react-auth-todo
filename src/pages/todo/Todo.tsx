import { Anchor, Container, Group, Paper, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import todoApi from "../../apis/todo.api";

const Todo = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return todoApi.getTodos();
    },
    staleTime: 3 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  return (
    <Container p="md">
      <Paper withBorder shadow="md" p={"md"}>
        <Group justify="space-between">
          <Title mb={"md"} order={1}>
            Todo App
          </Title>
          <Anchor component={Link} to={"/"}>
            Go back Home
          </Anchor>
        </Group>

        <TodoList todos={todos?.data} />
      </Paper>
    </Container>
  );
};

export default Todo;
