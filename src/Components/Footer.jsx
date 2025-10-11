const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 border-t-4 border-blue-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-semibold">© {new Date().getFullYear()} EducatorsAcademy</p>
        <p className="text-sm text-gray-300 mt-1">
          Empowering kids through online learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;
