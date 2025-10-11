const About = () => {
  return (
    <section className="p-10 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 min-h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-6">
        About EducatorsAcademy
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        At EducatorsAcademy, we believe every child learns best when education feels exciting.
        Our mission is to make online learning as fun and effective as a classroom environment,
        with professional teachers guiding each student personally from KG to Grade 8.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            Our Vision
          </h3>
          <p>
            To make quality education accessible to every child at home through technology and creativity.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            Our Mission
          </h3>
          <p>
            To foster a love of learning and encourage curiosity through personalized online lessons.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            Our Promise
          </h3>
          <p>
            Fun, interactive, and effective tutoring designed for every learner’s unique pace.
          </p>
        </div>
      </div>

      {/* 👇 Meet Our Founder Section */}
      <div className="mt-16 bg-white/70 p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-indigo-800 mb-6">
          Meet Our Founder
        </h3>

        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <img
            src="/Tooba.png"
            alt="Founder"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-300 object-cover mb-4 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-indigo-900">
              Engineer Tooba Aftab
            </h4>
            <p className="text-gray-700 mt-2 max-w-md">
              An educator with a vision to transform online learning into a joyful and creative experience.
              Eng. Tooba Aftab founded EducatorsAcademy since 1970 to ensure every child receives personalized attention, confidence,
              and curiosity-driven growth — no matter where they are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
