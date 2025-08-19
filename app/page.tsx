import Link from "next/link";

/**
 * Home Page (/)
 * Uygulamanın ana giriş sayfası.
 * Kullanıcı buradan /signin sayfasına yönlendirilebilir.
 */
export default function Home() {
  return (
    <main className="text-white p-8">
      <h1 className="text-2xl font-bold">Merhaba </h1>
      <p className="mt-2">
        Burası anasayfa. Login sayfasına buradan gidebilirsin.
      </p>

      {/* Next.js Link kullanmak SEO ve performans için daha iyi */}
      <Link href="/signin" className="text-blue-400 underline mt-4 block">
        Login Sayfasına Git
      </Link>
    </main>
  );
}
