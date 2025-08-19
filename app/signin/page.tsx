"use client";

import { signIn, signOut, useSession } from "next-auth/react";

/**
 * Signin Page (/signin)
 * Kullanıcı login olmadıysa Auth0 ile giriş yapmasını,
 * login olduysa bilgilerini ve logout seçeneğini gösterir.
 */
export default function SigninPage() {
  const { data: session } = useSession();

  return (
    <main className="p-8 font-sans text-white min-h-screen flex flex-col items-center justify-center bg-gray-900">
      {!session ? (
        <>
          {/* Kullanıcı login değil */}
          <h1 className="text-2xl font-bold mb-4">Merhaba </h1>
          <p className="mb-6">Henüz giriş yapmadın.</p>
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            onClick={() => signIn("auth0")}
          >
            Login with Auth0
          </button>
        </>
      ) : (
        <>
          {/* Kullanıcı login oldu */}
          <h1 className="text-2xl font-bold mb-4">
            Hoşgeldin {session.user?.name}
          </h1>
          <p className="mb-2">Email: {session.user?.email}</p>
          <p className="mb-6">Role: {session.user?.role ?? "user"}</p>
          <button
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      )}
    </main>
  );
}
