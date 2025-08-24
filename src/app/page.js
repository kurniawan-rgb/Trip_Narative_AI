import Image from "next/image";

export default function Home() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-500 rounded-3xl p-8 mb-8 shadow-md flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-700 text-center">Explore Beautiful Places</h1>
        <p className="mb-6 text-lg text-gray-600 text-center">All you need is Trip Narrative AI</p>
        {/* Form */}
        <form className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow p-4 w-full mb-4">
          <input type="text" placeholder="Destinasi (misal: Kyoto, Jepang)" className="flex-1 px-4 py-2 rounded border" />
          <input type="number" placeholder="Durasi (hari)" className="w-32 px-4 py-2 rounded border" />
          <input type="text" placeholder="Vibe/Tema" className="flex-1 px-4 py-2 rounded border" />
          <select className="w-32 px-4 py-2 rounded border bg-white text-gray-600">
            <option>Budget</option>
            <option>Hemat</option>
            <option>Menengah</option>
            <option>Mewah</option>
          </select>
          <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded">
            Generate
          </button>
        </form>
        {/* Popular Search */}
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {["Lotus Temple", "Eiffel Tower", "Batu Gong", "Prambanan Temple", "Borobudur Temple", "Tanah Sari", "Labuan Bajo", "Seminyak Beach", "The Grand Palace", "Viat Phra Kaew"].map((place) => (
            <span key={place} className="bg-white px-3 py-1 rounded-full shadow text-sm text-gray-700">
              {place}
            </span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">Categories</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {[
            { name: "Beach", img: "/public/beach.jpg" },
            { name: "Temple", img: "/public/temple.jpg" },
            { name: "Desert", img: "/public/desert.jpg" },
            { name: "Tower", img: "/public/tower.jpg" },
            { name: "Mountain", img: "/public/mountain.jpg" },
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center min-w-[120px]">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-2 overflow-hidden flex items-center justify-center">
                {/* Ganti dengan <img src={cat.img} /> jika ada gambar */}
                <span className="text-2xl">🏖️</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Destination For You */}
      <section>
        <h2 className="text-xl text-gray-800 font-semibold mb-4">Top Destination For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Seno Lake", img: "/public/lake.jpg" },
            { name: "Gunung Tidar", img: "/public/mountain.jpg" },
            { name: "Manhattan Bridge", img: "/public/bridge.jpg" },
            { name: "Snow Forest", img: "/public/forest.jpg" },
            { name: "Moyog Beach", img: "/public/beach.jpg" },
          ].map((dest) => (
            <div key={dest.name} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="h-32 w-full bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
                {/* Ganti dengan <img src={dest.img} /> jika ada gambar */}
                <span className="text-3xl">🌄</span>
              </div>
              <span className="font-semibold text-gray-800 mb-1">{dest.name}</span>
              <button className="mt-auto px-3 py-1 rounded bg-indigo-50 text-indigo-700 text-sm">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
