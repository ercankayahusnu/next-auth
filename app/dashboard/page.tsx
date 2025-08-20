import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * Dashboard Page (/dashboard)
 * Giriş yapmış kullanıcıların görebileceği sayfa.
 */
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="max-w-2xl mx-auto p-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-8">Giriş yaptığın için bu sayfayı görebiliyorsun ✅</p>

      {session?.user && (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={session.user.image ?? "/default-avatar.png"}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-2 border-blue-500"
            />
            <div>
              <h2 className="text-xl font-semibold">{session.user.name}</h2>
              <p className="text-gray-400">{session.user.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <p>
              <span className="font-bold">Rol: </span>
              <span className="capitalize text-green-400">
                {session.user.role ?? "user"}
              </span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
