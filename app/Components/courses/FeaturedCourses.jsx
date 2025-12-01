import CourseCard from "../courses/CourseCard";

export default function FeaturedCourses() {
  const courses = [
    { id: 1, title: "Web Development", image: "/course1.jpg", price: 49 },
    { id: 2, title: "React Mastery", image: "/course2.jpg", price: 59 },
    { id: 3, title: "Next.js Bootcamp", image: "/course3.jpg", price: 79 },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}
