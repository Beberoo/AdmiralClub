import React from "react";

const PromoCTA = ({ ctaText = "Iskoristi promociju", onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-black text-lg shadow-lg hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
        onClick={onClick}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default PromoCTA;
