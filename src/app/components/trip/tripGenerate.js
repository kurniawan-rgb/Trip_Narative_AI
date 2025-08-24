"use client";
import React, { useState } from "react";

export default function TripGenerateForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(e.target);
    const destination = formData.get("destination");
    const duration = formData.get("duration");
    const vibe = formData.get("vibe");
    const budget = formData.get("budget");

    try {
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
      const response = await fetch("https://api.aimlapi.com/v1/responses", {
        method: "POST",
        headers: {
          // Insert your AIML API Key instead of <YOUR_AIMLAPI_KEY>
          Authorization: "Bearer fd9df3e4a6144a5b8569eb46555f8491",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          input: [
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
          max_tokens: 1500, // Batas panjang respon // Insert your question here, instead of Hello
        }),
      });

      const data = await response.json();
      //   console.log(JSON.stringify(data, null, 2));
      // Cek apakah output_text, output, atau text tersedia
      if (typeof data === "string") {
        setResult(data);
      } else if (data.output_text) {
        setResult(data.output_text);
      } else if (data.output) {
        setResult(data.output);
      } else if (data.text) {
        setResult(data.text);
      } else {
        setResult("Tidak ada hasil narasi yang bisa ditampilkan.");
      }
    } catch (error) {
      console.error("Error", error);
    }

    // try {
    //   const res = await fetch("/api/generate", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ destination, duration, vibe, budget }),
    //   });
    //   if (!res.ok) {
    //     const error = await res.json();
    //     setResult(error.error || "Terjadi kesalahan.");
    //   } else {
    //     const data = await res.json();
    //     setResult(data);
    //   }
    // } catch (err) {
    //   setResult("Gagal terhubung ke server.");
    // }
    setLoading(false);
  };

  return (
    <div>
      <form className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow p-4 w-full mb-4" onSubmit={handleSubmit}>
        <input type="text" name="destination" placeholder="Destinasi (misal: Kyoto, Jepang)" className="text-gray-600 flex-1 px-4 py-2 rounded border" required />
        <input type="number" name="duration" placeholder="Durasi (hari)" className="text-gray-600 w-32 px-4 py-2 rounded border" required />
        <input type="text" name="vibe" placeholder="Vibe/Tema" className="text-gray-600 flex-1 px-4 py-2 rounded border" required />
        <select name="budget" className="w-32 px-4 py-2 rounded border bg-white text-gray-600" required>
          <option value="Budget">Budget</option>
          <option value="Hemat">Hemat</option>
          <option value="Menengah">Menengah</option>
          <option value="Mewah">Mewah</option>
        </select>
        <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded" disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      <div className="bg-gray-50 rounded-xl shadow p-4 min-h-[120px]">
        {loading && <p className="text-gray-500">Sedang membuat narasi perjalanan...</p>}
        {!loading && result && typeof result === "string" && <div className="whitespace-pre-line text-gray-800">{result}</div>}
      </div>
    </div>
  );
}
