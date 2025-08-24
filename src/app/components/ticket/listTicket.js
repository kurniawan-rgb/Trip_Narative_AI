"use client";

export default function ListTicket({ tickets = [] }) {
  if (!tickets.length) {
    return <div className="mt-6 text-gray-500 text-center">Belum ada rekomendasi tiket yang ditampilkan.</div>;
  }
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Rekomendasi Tiket</h2>
      <ul className="space-y-4">
        {tickets.map((ticket, idx) => (
          <li key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <div className="font-bold text-gray-600">{ticket.maskapai}</div>
              <div className="text-sm text-gray-700">{ticket.rute}</div>
              <div className="text-sm text-gray-500">Keberangkatan: {ticket.berangkat}</div>
              <div className="text-sm text-gray-500">
                Harga:{" "}
                {(() => {
                  // Ambil angka dari string harga, misal "Rp 3.500.000" -> 3500000
                  const num = parseInt(ticket.harga.replace(/[^\d]/g, ""), 10);
                  const color = num > 5000000 ? "text-red-600" : "text-green-600";
                  return <span className={`font-semibold ${color}`}>{ticket.harga}</span>;
                })()}
              </div>
            </div>
            <div className="ml-auto">
              <a href={ticket.link} target="_blank" rel="noopener" className="px-4 py-2 bg-gray-600 text-white rounded shadow text-sm">
                Cek Tiket
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
