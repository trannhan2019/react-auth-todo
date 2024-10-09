import {
  Button,
  ButtonGroup,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconCancel, IconEdit } from "@tabler/icons-react";
import { Todo } from "../../../../types/todo.type";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <Group justify="space-between">
      <UnstyledButton variant="subtle">
        <Text py={10}>{todo?.title}</Text>
      </UnstyledButton>

      <ButtonGroup>
        <Button variant="white">
          <IconEdit size={18} />
        </Button>
        <Button variant="white">
          <IconCancel size={18} color="red" />
        </Button>
      </ButtonGroup>
    </Group>
  );
};

export default TodoItem;
