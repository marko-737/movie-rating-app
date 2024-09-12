import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
    onSuccess: (data) => {
      if (data?.guest_session_id) {
        localStorage.setItem("guest_session_id", data.guest_session_id);
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    mutate();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering as a Guest below.
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Button color="violet" size="large" fluid type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
