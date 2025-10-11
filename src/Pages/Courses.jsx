import { BookOpen, PencilRuler, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

const Courses = () => {
  const courses = [
    {
      title: "Kindergarten (KG) Section",
      desc: "Interactive and playful learning — introducing alphabets, numbers, shapes, and creativity through stories and art.",
      color: "from-yellow-100 via-orange-50 to-pink-100",
      icon: <PencilRuler className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Primary Section",
      desc: "Grades 1–5: Building strong foundations in Math, English, Urdu, Science, and Computer Studies with engaging visuals and activities.",
      color: "from-pink-100 via-rose-50 to-purple-100",
      icon: <BookOpen className="w-12 h-12 text-pink-500" />,
    },
    {
      title: "Middle Section",
      desc: "Grades 6–8: Concept-building and exam-oriented learning, focusing on analytical thinking and skill-based preparation.",
      color: "from-blue-100 via-indigo-50 to-cyan-100",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    },
  ];

  return (
    <section className="p-12 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-100 min-h-[85vh]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-900">
          Our Courses
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We provide structured and enjoyable learning experiences for every
          stage — from curious beginners to confident learners.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((c, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${c.color} transition transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{c.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-3">
                {c.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Enroll Now Button Linked */}
      <div className="text-center mt-12">
        <Link to="/enroll">
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:shadow-lg transition duration-300">
            Enroll Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
