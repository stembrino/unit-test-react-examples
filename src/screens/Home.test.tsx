import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import UserProvider from "../context/user-context/UserProvider";
import Request from "../lib/Request";
import { UsersMock } from "../services/test/mock/UsersMock";
import Home from "./Home";

describe("<Home />", () => {
  const setUp = () => {
    const mockFetchUser = jest.fn();
    // @ts-ignore
    Request.get = jest.fn(() => Promise.resolve(UsersMock));
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );
    const loadingElement = screen.getByLabelText(/loading/i);
    return {
      screen,
      loadingElement,
      mockFetchUser,
    };
  };

  it("Should component load the user list", async () => {
    const { loadingElement, screen } = setUp();
    expect(loadingElement).toBeInTheDocument();

    await waitForElementToBeRemoved(loadingElement);
    const lineElements = screen.getAllByLabelText(/line/i);
    expect(loadingElement).not.toBeInTheDocument();
    lineElements.forEach((line) => {
      expect(line).toBeInTheDocument();
    });
  });
});
