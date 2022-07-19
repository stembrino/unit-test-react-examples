import { useEffect, useState } from "react";
import ElementList from "../components/UI/ElementList/ElementList";
import { Injection } from "../tools/Injection";

const userService = Injection.injectUserService();
let didMount = false;

const Home = () => {
  const [users, setUsers] = useState([] as any[]);

  useEffect(() => {
    if (didMount) return;
    console.log("rendered home");

    (async () => {
      const usersName = await userService.getUsers();
      setUsers(usersName);
    })();
    return () => {
      didMount = true;
    };
  }, []);

  const UserNamesElement = users.map((user) => (
    <ElementList key={user.id} text={user.username} email={user.email} />
  ));

  return (
    <div>
      <span>{UserNamesElement}</span>
    </div>
  );
};

export default Home;
