import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import AnimeItem from "./AnimeItem";

const Sidebar = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const getTopAnime = async () => {
    const result = await axios.get(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    );
    const _temp = result.data.top;
    setTopAnimes(_temp.slice(0, 5));
  };
  const getTopCharacters = async () => {
    const result = await axios.get("https://api.jikan.moe/v3/top/characters");
    const _temp = result.data.top;
    setTopCharacters(_temp.slice(0, 5));
  };
  useEffect(() => {
    getTopAnime();
    getTopCharacters();
  }, []);
  return (
    <div className="bg-blue-500 bg-opacity-10 mr-6 order-last sm:order-none w-full sm:w-96 rounded-sm text-gray-100">
      <div>
        <h1 className="uppercase bg-pink-600 px-3 py-4 rounded-sm">
          Top 5 Animes🔥
        </h1>
        {topAnimes.map((topAnime) => {
          return <AnimeItem title={topAnime.title} key={topAnime.title} />;
        })}
        <h1 className="uppercase bg-green-700 px-3 py-4 rounded-sm mt-10">
          Top 5 Characters🔥
        </h1>
        {topCharacters.map((topCharacters) => {
          return (
            <AnimeItem title={topCharacters.title} key={topCharacters.title} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
