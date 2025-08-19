import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * Dashboard Page (/dashboard)
 * Giriş yapmış kullanıcıların görebileceği sayfa.
 * Session bilgisi örnek olarak JSON formatında gösteriliyor.
 */
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="max-w-2xl mx-auto p-12 text-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Giriş yaptığın için bu sayfayı görebiliyorsun.</p>

      {/* Debug amaçlı session objesi */}
      <pre className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
