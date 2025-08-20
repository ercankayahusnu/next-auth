import { render, screen, fireEvent } from "@testing-library/react";
import SignInPage from "../app/signin/page";
import { vi, Mock } from "vitest";

// next-auth/react mock
vi.mock("next-auth/react", () => {
  return {
    useSession: vi.fn(),
    signIn: vi.fn(),
  };
});

import { useSession, signIn } from "next-auth/react";

describe("Signin Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("kullanıcı login değilken login butonu görünür", () => {
    (useSession as Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });
    render(<SignInPage />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("login butonuna tıklanınca signIn doğru parametreyle çağrılır", () => {
    (useSession as Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });
    render(<SignInPage />);
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledWith("auth0", { prompt: "login" });
  });
});
