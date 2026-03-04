# Çakır İnşaat - Yayına Alma Rehberi (Başlangıç Seviyesi)

Bu rehberde siteyi internetten erişilebilir hale getireceğiz.

## 1) Gerekli Hesaplar

- GitHub hesabı
- Vercel hesabı (GitHub ile giriş yapabilirsin)
- Domain satın alacağın bir firma hesabı (örnek: Turhost, Natro, GoDaddy, Namecheap)

## 2) Projeyi GitHub'a Yükleme

Terminalde proje klasöründe şu adımları çalıştır:

1. `git init`
2. `git add .`
3. `git commit -m "ilk sürüm"`
4. GitHub'da yeni repo aç (ör: `cakir-insaat`)
5. GitHub'ın verdiği bağlantıyı ekle:
   - `git remote add origin REPO_URL`
6. `git branch -M main`
7. `git push -u origin main`

Not: REPO_URL yerine GitHub'daki gerçek bağlantı gelecek.

## 3) Vercel'e Deploy Etme

1. https://vercel.com adresine gir.
2. GitHub ile giriş yap.
3. "Add New..." > "Project" seç.
4. GitHub reposundan `cakir-insaat` projesini seç.
5. Framework otomatik Next.js olarak gelir.
6. "Deploy" butonuna bas.
7. 1-2 dakika sonra sana `*.vercel.app` uzantılı bir geçici adres verir.

Bu adımın sonunda siten internette açılır.

## 4) Domain Bağlama

1. Vercel panelinde projene gir.
2. "Settings" > "Domains" bölümüne gir.
3. Domain adını ekle (ör: `cakirinsaat.com`).
4. Vercel sana DNS kayıtları verir (A veya CNAME).
5. Domain aldığın firmanın DNS yönetim ekranına gir.
6. Vercel'in verdiği kayıtları birebir ekle.
7. Kaydet.

Bekleme süresi genelde 5-30 dakika, bazı durumlarda 24 saate uzayabilir.

## 5) SSL (HTTPS)

- Vercel SSL'i otomatik tanımlar.
- Tarayıcıda kilit işareti görünüyorsa işlem tamamdır.

## 6) Alan Adı Önerisi (Karar Veremiyorsan)

- cakirinsaat.com
- cakirinsaat.com.tr
- cakirinsaatyapi.com
- cakirinsaatgrup.com

Mümkünse kısa, yazımı kolay ve telefonda söylenince anlaşılır bir domain seç.

## 7) Yayın Sonrası Kontrol Listesi

- Ana sayfa açılıyor mu?
- Telefon doğru mu? (0536 799 36 22)
- Adres doğru mu?
- Mobilde görüntü düzgün mü?
- Google'da site başlığı "Çakır İnşaat" görünüyor mu?

## 8) Bir Sonraki Adım

Bu rehberden sonra şu iki bilgiyi netleştir:

- Kurumsal e-posta adresi
- Kesin domain adı

Bunları netleştirince siteyi tamamen final hale getirip canlıya geçeriz.
