import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("ana sayfa başlığını render eder", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it("snapshot doğru çalışıyor", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
