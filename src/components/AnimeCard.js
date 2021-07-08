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
    <div className="p-2 text-white p-4 bg-blue-500 m-2 rounded-sm text-center bg-opacity-10">
      <img src={animeImage} alt={animeTitle} />
      <h1 className="p-4 font-bold uppercase">{shortenedTitle}</h1>
      <button className="bg-green-600 w-full text-gray-200 py-4 rounded-sm">
        Show Details
      </button>
    </div>
  );
};

export default AnimeCard;
