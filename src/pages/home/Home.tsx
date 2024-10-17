import useAuthUser from "react-auth-kit/hooks/useAuthUser";

interface IUser {
  name: string;
  email: string;
  id: string;
}

const Home = () => {
  const auth = useAuthUser<IUser>();

  // console.log("home", auth);

  return <div>{auth?.email}</div>;
};

export default Home;
