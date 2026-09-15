import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";
import type { Todo } from "../types";

describe("TodoStats", () => {
  it("visar antal ej avklarade uppgifter som 'kvar'", () => {
    const todos: Todo[] = [
      { id: 1, text: "Handla mjölk", completed: true },
      { id: 2, text: "Diska", completed: false },
      { id: 3, text: "Städa", completed: false },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
  });
});