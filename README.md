# NextAuth + Auth0 Case Çalışması

## 🚀 Proje Hakkında

Bu proje, **Auth0** üzerinden kullanıcı kimlik doğrulama, **NextAuth.js** ile JWT tabanlı session yönetimi ve **middleware** ile sayfa bazlı yetkilendirme içerir.  
12Factor App prensiplerine uygun şekilde `.env` yapılandırması yapılmış, **Docker** ile container ortamında çalıştırılabilir hale getirilmiştir.

---

## 🛠️ Kullanılan Teknolojiler

- Next.js 15+ (App Router)
- TypeScript
- Auth0 (OAuth2 Provider)
- NextAuth.js
- JWT (JSON Web Token)
- TailwindCSS
- Docker
- Vitest

---

## 🔐 Özellikler

- Auth0 ile kullanıcı kimlik doğrulama
- NextAuth.js + JWT tabanlı session yönetimi
- Middleware ile sayfa koruma
- Rol tabanlı yetkilendirme (admin / user)
- Unauthorized sayfası (`/errors/unauthorized`)
- Docker konfigürasyonu
- Temel testler (Vitest / Playwright)

---

## 📂 Proje Yapısı

/ app <br>
/api/auth/[...nextauth] → NextAuth config <br>
/dashboard → Kullanıcıya özel sayfa <br>
/admin → Admin rolü için korumalı sayfa <br>
/errors/unauthorized → Yetkisiz erişim sayfası <br>
middleware.ts → Route koruma

---

## ⚙️ Kurulum

### 1. Repoyu klonla

```bash
  git clone https://github.com/kullaniciadi/next-auth.git
  cd next-auth

2.Ortam değişkenlerini ayarla
  kök dizine .env.local dosyası ekle:

  AUTH0_CLIENT_ID=xxxx
  AUTH0_CLIENT_SECRET=xxxx
  AUTH0_ISSUER_BASE_URL=https://dev-xxxxxx.us.auth0.com
  NEXTAUTH_SECRET=xxxx
  NEXTAUTH_URL=http://localhost:3000

3. Docker ile çalıştır
  docker compose up --build

  Uygulama → http://localhost:3000

4-Unit testleri çalıştırmak için:
npm run test
```
