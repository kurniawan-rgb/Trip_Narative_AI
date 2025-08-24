"use client";
import TicketForm from "./TicketForm";
import ListTicket from "./listTicket";
import { useState } from "react";

export default function TicketAdvisor() {
  const [tickets, setTickets] = useState([]);

  const handleSubmit = ({ from, to, month }) => {
    // Dummy data, bisa diganti dengan fetch API
    setTickets([
      {
        maskapai: "AirAsia",
        rute: `${from} - ${to}`,
        berangkat: `${month}-10`,
        harga: "Rp 3.500.000",
        link: "https://airasia.com",
      },
      {
        maskapai: "Zipair",
        rute: `${from} - ${to}`,
        berangkat: `${month}-12`,
        harga: "Rp 5.200.000",
        link: "https://zipair.net",
      },
    ]);
  };
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Ticket Advisor</h1>
      <p className="mb-6 text-gray-600">Masukkan rute dan bulan keberangkatan, dapatkan strategi dan rekomendasi maskapai dari AI.</p>
      <TicketForm onSubmit={handleSubmit} />
      {/* Hasil rekomendasi akan ditampilkan di sini */}
      <ListTicket tickets={tickets} />
    </div>
  );
}
