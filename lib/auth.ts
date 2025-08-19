import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

// NextAuth ayarlarını buradan yönetiyoruz
export const authOptions: NextAuthOptions = {
  providers: [
    // Auth0 provider’ı: client bilgilerini .env dosyasından alıyoruz
    Auth0Provider({
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    }),
  ],

  // JWT tabanlı session kullanılacak
  session: { strategy: "jwt" },

  callbacks: {
    /**
     * JWT callback:
     * Kullanıcı giriş yaptığında veya token yenilendiğinde tetiklenir.
     * Burada kullanıcı rollerini (roles) token içine ekliyoruz.
     */
    async jwt({ token, profile }) {
      const roles = (profile as any)?.["https://example.com/roles"];
      if (Array.isArray(roles)) {
        token.roles = roles;
        token.role = roles[0]; // ilk rolü default role olarak atıyoruz
      }

      // Eğer hiç rol yoksa default olarak "user"
      if (!token.role) token.role = "user";

      return token;
    },

    /**
     * Session callback:
     * Client tarafında oturum bilgisini dönerken tetiklenir.
     * Burada JWT’den gelen rol bilgilerini session.user içine yazıyoruz.
     */
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.roles = token.roles;
      return session;
    },
  },

  // Eğer kullanıcı giriş yapmamışsa yönlendirilecek sayfamız
  pages: { signIn: "/login" },
};
