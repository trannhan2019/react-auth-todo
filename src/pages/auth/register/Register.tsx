import { Anchor, Paper, Title, Text, Container } from "@mantine/core";
import { Link } from "react-router-dom";

const Register = () => {
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
        {/* Register form */}
      </Paper>
    </Container>
  );
};

export default Register;
