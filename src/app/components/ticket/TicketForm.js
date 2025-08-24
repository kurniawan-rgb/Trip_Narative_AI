"use client";
import React, { useState } from "react";

export default function TicketForm({ onSubmit }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [month, setMonth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !month) return;
    onSubmit({ from, to, month });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-row gap-4 max-w-4xl mx-full">
      <div>
        <label className="block mb-1 text-gray-800  font-medium">Dari (Kota/Negara Asal)</label>
        <input type="text" className="w-full text-gray-600 px-4 py-2 border rounded" placeholder="Contoh: Jakarta" value={from} onChange={(e) => setFrom(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1 text-gray-800  font-medium">Ke (Kota/Negara Tujuan)</label>
        <input type="text" className="w-full px-4 py-2 text-gray-600  border rounded" placeholder="Contoh: Tokyo" value={to} onChange={(e) => setTo(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1 text-gray-800  font-medium">Bulan Keberangkatan</label>
        <input type="month" className="w-full px-4 py-2 border text-gray-600  rounded" value={month} onChange={(e) => setMonth(e.target.value)} required />
      </div>
      <button type="submit" className="bg-gray-800 text-white px-6  py-2 rounded font-semibold">
        Dapatkan Rekomendasi
      </button>
    </form>
  );
}
