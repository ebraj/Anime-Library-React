import React, { useState, useEffect } from "react";

const AnimeCard = (props) => {
  const [shortenedTitle, setShortenedTitle] = useState("");
  const { animeImage, animeTitle } = props;
  // console.log(animeTitle);
  useEffect(() => {
    if (animeTitle.length < 15) {
      setShortenedTitle(animeTitle);
      return;
    }
    setShortenedTitle(animeTitle.substr(0, 15) + "...");
  }, [animeTitle]);
  console.log(shortenedTitle);

  return (
    <div className="p-2 text-white bg-blue-500 rounded-sm text-center bg-opacity-10">
      <img src={animeImage} alt={animeTitle} />
      <h1 className="p-4 font-bold uppercase">{shortenedTitle}</h1>
      <button className="bg-yellow-500 w-full text-gray-900 font-bold py-3 rounded-sm">
        Show Details
      </button>
    </div>
  );
};

export default AnimeCard;
