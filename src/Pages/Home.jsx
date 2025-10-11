import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200 text-center">
      <h1 className="text-5xl font-extrabold text-indigo-900">
        Welcome to <span className="text-blue-700">EducatorsAcademy</span>
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl">
        Personalized online tuition for KG to Grade 8. 
        Learn with experienced teachers in an engaging, fun, and supportive environment.
      </p>

      {/* 👇 Added Link here */}
      <Link to="/courses">
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300">
          Explore Courses
        </button>
      </Link>
    </section>
  );
};

export default Home;
