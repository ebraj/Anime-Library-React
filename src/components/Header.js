import React, { useState } from "react";

const Header = (props) => {
  // Object Destructuring
  const { getSearchedTerm } = props;
  const [search, setSearch] = useState("");
  //Creating the search term functions
  const searchedTermFun = (e) => {
    setSearch(e.target.value);
  };
  const submitSearchFun = (e) => {
    e.preventDefault();
    getSearchedTerm(search);
    setSearch("");
  };
  return (
    <div className="p-4 bg-blue-500 bg-opacity-10 flex flex-col flex-nowrap justify-between items-center sm:flex-row">
      <h2 className="font-bold text-gray-100 text-xl sm:p-0 p-4">
        📙AnimeLibrary
      </h2>
      <form onSubmit={submitSearchFun} className="text-center">
        <input
          onChange={searchedTermFun}
          value={search}
          type="text"
          placeholder="Search for Anime"
          className="uppercase px-6 py-3 bg-blue-100 bg-opacity-10 placeholder-gray-500 outline-none text-gray-100 rounded-sm"
        />
        <button className="m-1 px-6 py-3 bg-pink-500 text-gray-100 rounded-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
