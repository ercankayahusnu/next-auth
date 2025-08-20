import Link from "next/link";

/**
 * Home Page (/)
 * Uygulamanın ana giriş sayfası.
 * Kullanıcı buradan /signin sayfasına yönlendirilebilir.
 */
// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      {/* Başlık */}
      <h1 className="text-4xl font-bold mb-4"> NextAuth + Auth0 Projesi</h1>
      <p className="text-gray-300 text-lg mb-8 text-center max-w-xl">
        Bu proje, Auth0 ile kimlik doğrulama ve rol tabanlı erişim kontrolü
        yapabilmek için hazırlandı. Dashboard ve Admin panellerine erişim için
        giriş yapabilirsin.
      </p>

      {/* Butonlar */}
      <div className="flex gap-4">
        <Link
          href="/signin"
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Giriş Yap
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Husnu Ercankaya
      </footer>
    </main>
  );
}
