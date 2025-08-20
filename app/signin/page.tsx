"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

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
            onClick={() => {
              if (process.env.NODE_ENV === "test") {
                // Playwright test ortamında Auth0’ya gitmesin, direkt dashboard’a yönlendir
                window.location.href = "/dashboard";
              } else {
                // Normal çalışmada Auth0 login flow
                signIn("auth0", { prompt: "login" });
              }
            }}
          >
            Login with Auth0
          </button>
        </>
      ) : (
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">
            Hoşgeldin {session.user?.name}
          </h1>
          <p className="mb-2">Email: {session.user?.email}</p>
          <p className="mb-6">Role: {session.user?.role ?? "user"}</p>

          {/* Menü bağlantıları */}
          <div className="flex flex-col gap-3 mb-6">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Dashboard
            </Link>

            {session.user?.role === "admin" && (
              <Link
                href="/admin"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                Admin Paneli
              </Link>
            )}
          </div>

          <button
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg w-full"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
