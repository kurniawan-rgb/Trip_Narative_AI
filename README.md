# Trip Narative AI - Your Personal AI-Powered Travel Storyteller

Sebuah platform travel berbasis AI yang mengubah cara Anda merencanakan liburan, dari daftar biasa menjadi sebuah cerita petualangan yang personal dan inspiratif.

---

## 📖 Tentang Proyek

Perencanaan liburan seringkali terasa membosankan, transaksional, dan penuh dengan tab browser yang tak terhitung jumlahnya. Kita menghabiskan waktu berjam-jam mencari "tempat terbaik untuk dikunjungi", tetapi seringkali kehilangan esensi dari sebuah perjalanan: **cerita dan pengalaman.**

**DestinAI** hadir dengan pendekatan yang berbeda. Dengan memanfaatkan kekuatan model bahasa canggih (GPT-4o), aplikasi web ini tidak hanya memberikan daftar tempat, tetapi merangkai sebuah **narasi perjalanan** yang unik berdasarkan preferensi Anda. Cukup masukkan destinasi, durasi, dan "vibe" yang Anda inginkan, dan biarkan AI menjadi penulis cerita perjalanan pribadi Anda.

Proyek ini dibangun sebagai eksplorasi bagaimana AI generatif dapat menciptakan pengalaman pengguna yang lebih emosional dan personal dalam industri travel.

---

## ✨ Fitur Utama

- **🤖 AI Story-Weaver Itinerary:** Fitur unggulan yang mengubah input sederhana (tujuan, durasi, tema, budget) menjadi sebuah cerita perjalanan harian yang kaya dan deskriptif.
- **👤 Otentikasi Pengguna:** Sistem login yang aman menggunakan **Firebase Authentication** (Google Sign-In), memungkinkan pengguna untuk memiliki profil pribadi.
- **📚 Simpan & Akses Rencana Perjalanan:** Setiap itinerary yang dihasilkan dapat disimpan ke akun pengguna dan diakses kapan saja, berkat integrasi dengan **Cloud Firestore**.
- **💬 Asisten Travel Cerdas 24/7:** Sebuah chatbot AI untuk menjawab pertanyaan cepat seputar travel, mulai dari rekomendasi kuliner hingga informasi visa.
- **✈️ Penasihat Tiket Murah:** Fitur berbasis AI yang memberikan **strategi dan tips** untuk menemukan tiket penerbangan dengan harga terbaik, tanpa perlu integrasi API yang rumit.
- **🎨 Antarmuka Modern & Responsif:** Desain yang bersih dan intuitif dibangun dengan **Tailwind CSS**, memastikan pengalaman yang mulus di berbagai perangkat.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun dengan tumpukan teknologi modern yang berfokus pada kecepatan dan pengalaman developer.

- **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **AI Generatif:** [OpenAI API (GPT-3.5 Turbo)](https://openai.com/) But I Use AI/ML (https://aimlapi.com/)
- **Database & Otentikasi:** [Firebase](https://firebase.google.com/) (Authentication & Cloud Firestore)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Panduan Instalasi & Setup

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal di mesin Anda.

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/your-username/destinai.git](https://github.com/your-username/destinai.git)
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd destinai
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Setup Environment Variables**
    Buat file `.env.local` di root direktori proyek dan isi dengan kredensial Anda. Lihat bagian `.env.example` di bawah.

5.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 🔑 Environment Variables

Anda perlu membuat file `.env.local` dan mengisi variabel berikut agar aplikasi dapat berjalan dengan baik.
