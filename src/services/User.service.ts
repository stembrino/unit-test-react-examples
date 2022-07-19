import Request from "../lib/Request";

class UserService {
  private readonly GET_USERS_URL = "http://jsonplaceholder.typicode.com/users";

  public getUsers = async () => {
    console.debug("INFO: the function getUsers has been called");
    return await Request.get(this.GET_USERS_URL);
  };
}

export default UserService;
