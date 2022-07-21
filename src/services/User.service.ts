import Request from "../lib/Request";

class UserService {
  private readonly GET_USERS_URL = "http://jsonplaceholder.typicode.com/users";

  public getUsers = async () => {
    console.debug("INFO: the function getUsers has been called");
    const users = await Request.get(this.GET_USERS_URL);
    console.debug("HELLO");
    return users;
  };
}

export default UserService;
