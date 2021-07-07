import React from "react";

const Header = () => {
  return (
    <div className="p-4 bg-green-500 flex flex-nowrap justify-between items-center">
      <h2 className="font-bold text-gray-900 text-xl">📙AnimeLibrary</h2>
      <form>
        <input
          type="text"
          placeholder="Search for Anime"
          className="px-6 py-3 bg-green-800 bg-opacity-50 placeholder-gray-300 outline-none text-white"
        />
      </form>
    </div>
  );
};

export default Header;
