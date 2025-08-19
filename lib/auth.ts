import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const ROLE_CLAIM = "https://example.com/roles";
const DEFAULT_ROLE = "user";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    /**
     * JWT callback
     * Kullanıcı login olduğunda veya token yenilendiğinde çalışır.
     * Burada ID Token içindeki role claim alınır ve token.role içine yazılır.
     */
    async jwt({ token, account }) {
      if (account?.id_token) {
        const payload = JSON.parse(
          Buffer.from(account.id_token.split(".")[1], "base64").toString()
        );

        const roles = payload[ROLE_CLAIM];
        if (Array.isArray(roles) && roles.length > 0) {
          token.roles = roles;
          token.role = roles[0]; // İlk rolü ana rol yapıyoruz
        }
      }

      if (!token.role) {
        token.role = DEFAULT_ROLE; // Default olarak user
      }

      return token;
    },

    /**
     * Session callback
     * Client tarafına dönen session objesine rol bilgisini ekliyoruz.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.roles = token.roles;
      }
      return session;
    },
  },

  //NextAuth'un signIn sayfası override edildi
  pages: { signIn: "/signin" },
};
