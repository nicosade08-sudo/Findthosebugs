import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

describe("TodoApp - bocka av rätt uppgift", () => {
  it("markerar rätt uppgift som klar", async () => {
    const user = userEvent.setup();
    render(<TodoApp />);
    await user.type(screen.getByLabelText("Ny uppgift"), "Handla mjölk");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));
    await user.type(screen.getByLabelText("Ny uppgift"), "Diska");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    const diska = screen.getByRole("checkbox", { name: /diska/i });
    await user.click(diska);

    expect(diska).toBeChecked();
    expect(screen.getByRole("checkbox", { name: /handla mjölk/i })).not.toBeChecked();
  });
});