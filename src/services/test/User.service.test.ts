import Request from "../../lib/Request";
import UserService from "../User.service";
import { UsersMock } from "./mock/UsersMock";

describe("class UserService", () => {
  const setUp = () => {
    Request.get = jest.fn(() => Promise.resolve(UsersMock));
    const userService = new UserService();
    return {
      userService,
    };
  };

  it("Should getUser be called", () => {
    const { userService } = setUp();
    userService.getUsers();
    expect(Request.get).toBeCalledTimes(1);
  });
});
