import { Box, Button, FocusTrap, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import todoApi from "../../../../apis/todo.api";
import { notifications } from "@mantine/notifications";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
});

const TodoAddForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    mode: "uncontrolled",
    initialValues: {
      title: "",
    },
    validate: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof schema>) =>
      todoApi.addTodo(values.title),
  });

  const queryClient = useQueryClient();

  const onSubmit = (values: z.infer<typeof schema>) => {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        notifications.show({
          title: "Success",
          message: "Todo added successfully",
          position: "top-right",
          color: "green",
        });
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
      onError: (error) => {
        console.log("error add todo", error);
        notifications.show({
          title: "Error",
          message: "Todo added failed",
          position: "top-right",
          color: "red",
        });
      },
    });
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Group align="center">
          <FocusTrap>
            <TextInput
              placeholder="Add Todo"
              key={form.key("title")}
              {...form.getInputProps("title")}
            />
          </FocusTrap>
          <Button size="sm" loading={isPending} type="submit">
            Add Todo
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default TodoAddForm;
