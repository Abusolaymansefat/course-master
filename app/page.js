import Image from "next/image";
import Banner from "./Components/home/Banner.jsx";
import FeaturedCoures from "./Components/courses/FeaturedCourses.jsx"

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Add more homepage sections */}
    <FeaturedCoures/>
    </div>
  );
}