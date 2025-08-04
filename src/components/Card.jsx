const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="flex flex-col items-center text-center w-64 max-w-full bg-white/70 backdrop-blur-md border border-blue-300 rounded-2xl p-6 shadow-xl transition-transform hover:scale-105 duration-300">
      <div className="text-blue-500 mb-4">{emoji}</div>

      <h3 className="text-lg font-semibold text-blue-800">{heading}</h3>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{detail}</p>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default Card;
