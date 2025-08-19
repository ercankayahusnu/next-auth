import Link from "next/link";

/**
 * Unauthorized Page (/errors/unauthorized)
 * Kullanıcının yetkisi olmayan bir sayfaya erişmeye çalıştığında gösterilir.
 */
export default function UnauthorizedPage() {
  return (
    <main className="max-w-xl mx-auto p-12 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Yetkin Yok</h1>
      <p className="mb-6">Bu sayfaya erişim iznin bulunmuyor.</p>

      {/* Kullanıcıya geri dönüş için link */}
      <Link
        href="/signin"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Giriş Sayfasına Dön
      </Link>
    </main>
  );
}
