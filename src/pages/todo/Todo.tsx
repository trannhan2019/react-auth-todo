import { Anchor, Container, Group, Paper, Title } from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import todoApi from "../../apis/todo.api";
import { TodoSearchParams } from "../../types/todo.type";
import TodoPagination from "./components/TodoPagination/TodoPagination";
import TodoAddForm from "./components/TodoAddForm/TodoAddForm";
import TodoSearch from "./components/TodoSearch/TodoSearch";

const Todo = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);

  const { data: todos } = useQuery({
    queryKey: ["todos", queryParams],
    queryFn: () => {
      return todoApi.getTodos(queryParams as unknown as TodoSearchParams);
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
        <Group justify="space-between" mb={"md"}>
          <TodoAddForm />
          <TodoSearch />
        </Group>

        <TodoList todos={todos?.data.todos} />
        <TodoPagination
          page={todos?.data.page as number}
          total={todos?.data.total as number}
        />
      </Paper>
    </Container>
  );
};

export default Todo;
