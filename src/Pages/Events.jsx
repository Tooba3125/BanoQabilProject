const Events = () => {
  return (
    <section className="p-10 bg-gradient-to-bl from-green-100 via-teal-100 to-blue-100 min-h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-teal-700 mb-6">Upcoming Events</h2>
      <ul className="space-y-6 max-w-2xl mx-auto text-left text-gray-700">
        <li className="bg-white p-4 rounded-lg shadow-md">
          <strong>Reading Week:</strong> Storytelling and creative writing fun (Nov 20–24)
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md">
          <strong>Art Day:</strong> Painting and craft competition (Dec 5)
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md">
          <strong>Parent-Teacher Meetup:</strong> Discuss progress & next term plans (Jan 10)
        </li>
      </ul>
    </section>
  );
};

export default Events;
