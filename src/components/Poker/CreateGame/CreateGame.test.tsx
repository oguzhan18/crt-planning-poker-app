import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { CreateGame } from "./CreateGame";
import * as gamesService from "../../../service/games";

jest.mock("../../../service/games");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("CreateGame component", () => { 

  it("should display correct text fields", () => {
    render(<CreateGame />);
    // Use getByPlaceholderText as a workaround
    expect(screen.getByPlaceholderText("Enter a room name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should display create button", () => {
    render(<CreateGame />);
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
  });

  it("should be able to create new game room", async () => {
    render(<CreateGame />);
    const roomNameInput = screen.getByPlaceholderText("Enter a room name");
    const userNameInput = screen.getByPlaceholderText("Enter your name");

    userEvent.clear(roomNameInput);
    userEvent.type(roomNameInput, "Marvels");

    userEvent.clear(userNameInput);
    userEvent.type(userNameInput, "Rock");

    const gameTypeRadio = screen.getByLabelText("Hours (7h) (0, ½, 1, 2, 3, 4, 7, 11, 14, 21, 35, 56, 70)");
    userEvent.click(gameTypeRadio);

    const createButton = screen.getByRole("button", { name: "Create" });
    userEvent.click(createButton);

    expect(gamesService.addNewGame).toHaveBeenCalledWith(
      expect.objectContaining({
        createdBy: "Rock",
        gameType: "HoursSevenCards",
        name: "Marvels",
      })
    );
  });
});
