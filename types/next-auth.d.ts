import NextAuth, { DefaultSession } from "next-auth";

// NextAuth tiplerini genişletiyoruz (module augmentation).
// Çünkü varsayılan Session/User/JWT içinde role yok.
// Biz role ve roles eklemek istiyoruz.
declare module "next-auth" {
  interface Session {
    user: {
      /** Kullanıcının rolü */
      role?: string;
      roles?: string[];
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    roles?: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    roles?: string[];
  }
}
