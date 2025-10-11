const Contact = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 min-h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-6">We’d love to hear from you! Reach out with questions or feedback.</p>
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <input className="w-full border p-2 rounded mb-3" placeholder="Your Name" />
        <input className="w-full border p-2 rounded mb-3" placeholder="Your Email" />
        <textarea className="w-full border p-2 rounded mb-3" rows="4" placeholder="Your Message"></textarea>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
