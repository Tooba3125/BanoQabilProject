const Teachers = () => {
  const teachers = [
    {
      name: "Miss Ayesha Khan",
      subject: "Mathematics & Science",
      qualification: "M.Sc. Physics, NED University",
      img: "g1.jpg",
    },
    {
      name: "Mr. Bilal Ahmed",
      subject: "English & Social Studies",
      qualification: "MA English, Karachi University",
      img: "b1.jpg",
    },
    {
      name: "Miss Sara Malik",
      subject: "Early Grades (KG–Primary)",
      qualification: "B.Ed. Elementary Education, Agha Khan University",
      img: "g2.jpg",
    },
    {
      name: "Sir Hamza Tariq",
      subject: "Computer Studies",
      qualification: "BS Computer Science, FAST University",
      img: "b2.jpg",
    },
    {
      name: "Miss Fatima Noor",
      subject: "Urdu Language & Literature",
      qualification: "MA Urdu, Karachi University",
      img: "g3.jpg",
    },
    {
      name: "Sir Ali Hassan",
      subject: "Islamiyat & Pakistan Studies",
      qualification: "M.Phil Islamic Studies, University of Punjab",
      img: "b3.jpg",
    },
    {
      name: "Miss Hira Qureshi",
      subject: "Science & Environmental Studies",
      qualification: "M.Sc. Environmental Science, KU",
      img: "g4.jpg",
    },
    {
      name: "Sir Fahad Siddiqui",
      subject: "Mathematics (Grades 6–8)",
      qualification: "B.Sc. Mathematics, NED University",
      img: "b4.jpg",
    },
    {
      name: "Miss Mehwish Ali",
      subject: "Art & Creativity",
      qualification: "BFA Fine Arts, Indus Valley School",
      img: "g5.jpg",
    },
    {
      name: "Sir Usman Khalid",
      subject: "Science & Robotics (STEM)",
      qualification: "B.E. Mechatronics, NUST",
      img: "b5.jpg",
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 min-h-[80vh]">
      <h2 className="text-4xl font-bold text-center text-yellow-700 mb-10">
        Meet Our Teachers
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teachers.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Teacher Image */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={t.img}
                alt={t.name}
                className="object-contain h-full w-full rounded-t-2xl"
              />
            </div>

            {/* Teacher Info */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-indigo-700">
                {t.name}
              </h3>
              <p className="text-gray-700 mt-2 font-medium">{t.subject}</p>
              <p className="text-sm text-gray-500 mt-2 italic">
                {t.qualification}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
