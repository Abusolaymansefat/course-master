import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Image
        src={course.image}
        alt="Course Image"
        width={400}
        height={220}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{course.title}</h3>
        <p className="text-gray-600 mt-2">${course.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
