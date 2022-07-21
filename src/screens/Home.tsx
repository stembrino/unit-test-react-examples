import { useEffect } from "react";
import { Loading } from "../components/Loading/Loading";
import ElementList from "../components/UI/ElementList/ElementList";
import { useUserContext } from "../context/user-context/UserProvider";

let didMount = false;

const Home = () => {
  const { fetchUsers, users } = useUserContext();

  useEffect(() => {
    if (didMount) return;
    console.log("rendered home");

    fetchUsers();
    return () => {
      didMount = true;
    };
  }, [fetchUsers]);

  const UserNamesElement = users.map((user) => (
    <ElementList key={user.id} text={user.username} email={user.email} />
  ));

  return (
    <div>
      <span>{users.length > 0 ? UserNamesElement : <Loading />}</span>
    </div>
  );
};

export default Home;
