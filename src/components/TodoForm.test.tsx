import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

describe("TodoApp - tomma uppgifter", () => {
  it("lägger inte till en tom uppgift", async () => {
    const user = userEvent.setup();
    render(<TodoApp />);

    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    expect(screen.getByText("Inga uppgifter att visa.")).toBeInTheDocument();
  });
});