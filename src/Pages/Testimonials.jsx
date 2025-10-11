const Testimonials = () => {
  const feedback = [
    { name: "Fatima (Parent)", text: "My son improved a lot in Math after joining EducatorsAcademy!" },
    { name: "Ali (Student)", text: "The teachers are super friendly and make learning fun!" },
    { name: "Sara (Parent)", text: "Great platform — very convenient for working parents." },
  ];

  return (
    <section className="p-10 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 min-h-[80vh]">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">What Parents Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {feedback.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <p className="italic text-gray-700">“{f.text}”</p>
            <h4 className="mt-4 font-semibold text-indigo-700">— {f.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
