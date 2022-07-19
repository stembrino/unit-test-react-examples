import UserService from "../services/User.service";

export class Injection {
  public static injectUserService = () => new UserService();
}
