import { Paper, Stack } from "@mantine/core";
import { Todo } from "../../../../types/todo.type";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: Todo[] | undefined;
}
const TodoList = ({ todos }: Props) => {
  return (
    <Paper withBorder shadow="md" p={"md"}>
      <Stack>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Paper>
  );
};

export default TodoList;
