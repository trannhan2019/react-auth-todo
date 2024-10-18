import {
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "mantine-form-zod-resolver";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import authApi from "../../../apis/auth.api";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(5),
  password: z.string().min(6),
});

const Register = () => {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof schema>) => {
      return authApi.register(values.name, values.email, values.password);
    },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        notifications.show({
          title: "Success",
          message: "Account created successfully",
          color: "green",
        });
        navigate("/login");
      },
      onError: (error) => {
        console.log("error register", error);
        notifications.show({
          title: "Error",
          message: "Account created failed",
          color: "red",
        });
      },
    });
  };

  return (
    <Container size={420} my={60}>
      <Title ta="center">Register Your Account</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do you have an account yet?{" "}
        <Anchor to="/login" size="sm" component={Link}>
          Login account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Full name"
            placeholder="yourname"
            required
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            mt={"md"}
            required
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button type="submit" fullWidth mt="xl" loading={isPending}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
