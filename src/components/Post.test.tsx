import { render, screen } from "@testing-library/react";
import { vi, beforeEach, afterEach } from "vitest";
import Post from "./Post";

describe("Post", () => {
  beforeEach(() => {
    global.fetch = vi.fn((url: string) => {
      const id = url.split("/").pop();
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            id: Number(id),
            userId: 1,
            title: `Inlägg nummer ${id}`,
            body: "Text",
          }),
      });
    }) as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("hämtar inlägget som matchar id-propen", async () => {
    render(<Post id={2} />);
    expect(await screen.findByText("Inlägg nummer 2")).toBeInTheDocument();
  });
});