import NextAuth, { DefaultSession } from "next-auth";

/**
 * NextAuth tiplerini genişletiyoruz (module augmentation).
 * Varsayılan Session, User ve JWT objelerinde role yok.
 * Biz RBAC (Role Based Access Control) için `role` ve `roles` alanlarını ekliyoruz.
 */
declare module "next-auth" {
  interface Session {
    user: {
      /**
       * Kullanıcının ana rolü
       * Örn: "admin" | "user"
       */
      role?: string;

      /**
       * Kullanıcının sahip olduğu tüm roller
       */
      roles?: string[];
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    roles?: string[];
  }
}

/**
 * JWT token'ını da genişletiyoruz.
 * Böylece backend tarafında token üzerinden role kontrolü yapılabiliyor.
 */
declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    roles?: string[];
  }
}
