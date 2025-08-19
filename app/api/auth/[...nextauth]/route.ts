import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * NextAuth Route Handler
 * Bu endpoint /api/auth altında çalışır.
 * NextAuth tüm login/logout/callback isteklerini burada yönetir.
 */
const handler = NextAuth(authOptions);

// Next.js App Router'da GET ve POST methodlarını export etmek gerekiyor
export { handler as GET, handler as POST };
