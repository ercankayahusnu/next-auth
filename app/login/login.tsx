"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {!session ? (
        <>
          <h1>Merhaba!</h1>
          <p>Henüz giriş yapmadın.</p>
          <button
            style={{ padding: "8px 16px", marginTop: "12px" }}
            onClick={() => signIn("auth0")}
          >
            Login with Auth0
          </button>
        </>
      ) : (
        <>
          <h1>Hoşgeldin {session.user?.name}</h1>
          <p>Email: {session.user?.email}</p>
          <p>Role: {session.user?.role ?? "user"}</p>
          <button
            style={{ padding: "8px 16px", marginTop: "12px" }}
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      )}
    </main>
  );
}
