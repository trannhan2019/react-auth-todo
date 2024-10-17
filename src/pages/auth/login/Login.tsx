import {
  Anchor,
  Button,
  Center,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../../apis/auth.api";
import { notifications } from "@mantine/notifications";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const schema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(6),
});

export default function Login() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof schema>) => {
      return authApi.login(values.email, values.password);
    },
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    mutate(values, {
      onSuccess: (res) => {
        if (
          signIn({
            auth: {
              token: res.data.accessToken,
              type: "Bearer",
            },
            userState: res.data.user,
          })
        ) {
          form.reset();
          notifications.show({
            title: "Success",
            message: "Account created successfully",
            color: "green",
          });
          navigate("/");
        } else {
          notifications.show({
            title: "Error",
            message: "Account signIn failed",
          });
        }
        // console.log(res.data);
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
    <div className={classes.wrapper}>
      <div className={classes.bgImage}></div>
      <div className={classes.form}>
        <Center h={"100%"} w={"100%"}>
          <Paper>
            <Title order={2} ta="center" mb={50}>
              Welcome back to Mantine!
            </Title>

            <form onSubmit={form.onSubmit(onSubmit)}>
              <TextInput
                label="Email"
                placeholder="Your Email"
                size="md"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />

              <Text c="dimmed" size="sm" mt={5}>
                Do you have an account yet?{" "}
                <Anchor component={Link} to="/register" size="sm">
                  Register account
                </Anchor>
              </Text>
              <Button
                type="submit"
                loading={isPending}
                fullWidth
                mt="xl"
                size="sm"
              >
                Login
              </Button>
            </form>
          </Paper>
        </Center>
      </div>
    </div>
  );
}
