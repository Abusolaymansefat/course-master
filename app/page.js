import Image from "next/image";
import Banner from "./Components/home/Banner.jsx"

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Add more homepage sections */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Top Courses</h2>
        <p className="text-gray-600">Courses will load from API later...</p>
      </section>
    </div>
  );
}