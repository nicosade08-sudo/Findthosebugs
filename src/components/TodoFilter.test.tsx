import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

describe("TodoApp - filtret Klara", () => {
  it("visar inga uppgifter när ingen är avklarad", async () => {
    const user = userEvent.setup();
    render(<TodoApp />);
    await user.type(screen.getByLabelText("Ny uppgift"), "Handla mjölk");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    await user.click(screen.getByRole("button", { name: "Klara" }));

    expect(screen.queryByText("Handla mjölk")).not.toBeInTheDocument();
    expect(screen.getByText("Inga uppgifter att visa.")).toBeInTheDocument();
  });
});