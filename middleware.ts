import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = (req as any).nextauth.token;

    // Admin route koruması
    // Eğer kullanıcı admin değilse -> /errors/unauthorized sayfasına yönlendiriyoruz
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      const url = req.nextUrl.clone();
      url.pathname = "/errors/unauthorized";
      return NextResponse.redirect(url);
    }

    // Dashboard koruması
    // Eğer kullanıcı login değilse -> /signin sayfasına yönlendiriyoruz
    if (pathname.startsWith("/dashboard") && !token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    //Yetkili erişim -> route devam etsin
    return NextResponse.next();
  },
  {
    //NextAuth callback'ini boş geçiyoruz çünkü kontrolü manuel yapıyoruz
    callbacks: {
      authorized: () => true,
    },
  }
);

//Middleware'in çalışacağı route matcher'lar
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
