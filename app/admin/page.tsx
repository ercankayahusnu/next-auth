/**
 * Admin Page (/admin)
 * Bu sayfa yalnızca `role=admin` kullanıcılar için erişilebilir.
 * Middleware kontrolü ile admin rolü olmayan kullanıcılar
 * /errors/unauthorized sayfasına yönlendirilir.
 */
export default function AdminPage() {
  return (
    <main className="max-w-2xl mx-auto p-12 text-white">
      <h1 className="text-3xl font-bold mb-4"> Admin Panel</h1>
      <p className="mb-6">
        Bu sayfa yalnızca{" "}
        <code className="bg-gray-800 px-1 rounded">role=admin</code>
        kullanıcıya açıktır.
      </p>

      {/* Buraya admin'e özel componentler eklenebilir (ör: kullanıcı listesi, istatistik kartları) */}
    </main>
  );
}
