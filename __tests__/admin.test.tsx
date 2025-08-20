import { render, screen } from "@testing-library/react";
import AdminPage from "../app/admin/page";
import { SessionProvider } from "next-auth/react";

function renderWithSession(session: any = null) {
  return render(
    <SessionProvider session={session}>
      <AdminPage />
    </SessionProvider>
  );
}

describe("Admin Page", () => {
  it("Admin Panel başlığını render eder", () => {
    renderWithSession();
    expect(screen.getByText("Admin Panel")).toBeInTheDocument();
  });

  it("sayfanın açıklamasında role=admin bilgisi yer alır", () => {
    renderWithSession();
    expect(screen.getByText(/role=admin/i)).toBeInTheDocument();
  });

  it("admin rolü olan kullanıcı erişebilir", () => {
    const session = {
      user: { name: "Ercan", email: "ercan@test.com", role: "admin" },
      expires: "2099-01-01T00:00:00.000Z",
    };
    renderWithSession(session);
    expect(screen.getByText("Admin Panel")).toBeInTheDocument();
  });

  it("snapshot doğru çalışıyor", () => {
    const { asFragment } = renderWithSession();
    expect(asFragment()).toMatchSnapshot();
  });
});
