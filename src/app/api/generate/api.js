// src/app/api/generate/route.js

import { NextResponse } from "next/server";
import OpenAI from "openai";
import requests from "requests";

// Inisialisasi client OpenAI dengan API Key dari environment variable
const openai = new OpenAI({
  base_url: process.env.OPENAI_API_BASE,
  apiKey: process.env.OPENAI_API_KEY,
});

// Fungsi utama yang akan menangani request POST
export async function POST(req) {
  try {
    // Ambil data (destinasi, durasi, vibe, budget) dari body request
    const { destination, duration, vibe, budget } = await req.json();

    // Validasi input sederhana
    if (!destination || !duration || !vibe || !budget) {
      return NextResponse.json({ error: "Input tidak lengkap" }, { status: 400 });
    }

    // LANGKAH 4: PROMPT ENGINEERING DIMULAI DI SINI
    const prompt = `
            Anda adalah seorang penulis cerita perjalanan ahli bernama 'Globe Trotter AI'.
            Tugas Anda adalah membuat sebuah narasi perjalanan yang imersif dan personal dalam Bahasa Indonesia.

            Detail Perjalanan:
            - Destinasi: ${destination}
            - Durasi: ${duration} hari
            - Tema/Vibe: ${vibe}
            - Budget: ${budget}

            Instruksi:
            1. Buat judul perjalanan yang kreatif dan menarik.
            2. Tulis rencana perjalanan harian dalam bentuk cerita, bukan daftar poin yang kaku.
            3. Gunakan gaya bahasa yang sugestif dan seolah-olah pembaca sedang mengalaminya.
            4. Sertakan rekomendasi kuliner lokal, tempat tersembunyi (hidden gems), dan spot foto yang menarik.
            5. Pastikan outputnya terstruktur dengan baik per hari.
        `;

    // Kirim request ke API OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Gunakan model terbaru yang tersedia
      messages: [
        {
          role: "system",
          content: "Anda adalah seorang penulis cerita perjalanan ahli bernama 'Globe Trotter AI' yang sangat kreatif dan deskriptif.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8, // Sedikit lebih kreatif
      max_tokens: 1500, // Batas panjang respon
    });

    // Kirim kembali hasil dari AI sebagai response
    return NextResponse.json(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}

export async function main(req) {
  try {
    const response = await fetch("https://api.aimlapi.com/v1/responses", {
      method: "POST",
      headers: {
        // Insert your AIML API Key instead of <YOUR_AIMLAPI_KEY>
        Authorization: "Bearer <YOUR_AIMLAPI_KEY>",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        input: "Hello", // Insert your question here, instead of Hello
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error", error);
  }
}

main();
