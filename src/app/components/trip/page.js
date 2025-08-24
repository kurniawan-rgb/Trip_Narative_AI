import TripGenerateForm from "./tripGenerate";
export default function TripGenerator() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Trip Generator</h1>
      <p className="mb-6 text-gray-600">Masukkan destinasi, durasi, vibe/tema, dan budget. Dapatkan narasi perjalanan unik dari AI.</p>
      {/* Form dan hasil narasi akan ditambahkan di sini */}
      <TripGenerateForm />
    </div>
  );
}
