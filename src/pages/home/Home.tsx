import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../stores/auth";
import apiUser from "../../apis/user.api";

const Home = () => {
  const authStore = useAuthStore();

  const { data } = useQuery({
    queryKey: ["user/profile"],
    queryFn: () => {
      return apiUser.profile();
    },
  });

  return (
    <div>
      <h1>Home</h1>
      <p>Profile store, {authStore.profile?.name}</p>
      <p>Profile api, {data?.data.name}</p>
      {authStore.isAuth ? <p>Authenticated</p> : <p>Not Authenticated</p>}
      <button onClick={() => authStore.logout()}>Logout</button>
    </div>
  );
};

export default Home;
