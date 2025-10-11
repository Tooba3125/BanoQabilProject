const Gallery = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-pink-100 via-blue-100 to-yellow-100 min-h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6">Our Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
            <p className="mt-2 text-sm text-gray-600">Activity {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
