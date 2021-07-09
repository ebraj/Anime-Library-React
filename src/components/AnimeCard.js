import React, { useState, useEffect } from "react";

const AnimeCard = (props) => {
  const [shortenedTitle, setShortenedTitle] = useState("");
  const { animeImage, animeTitle, animeURL } = props;
  useEffect(() => {
    if (animeTitle.length < 15) {
      setShortenedTitle(animeTitle);
      return;
    }
    setShortenedTitle(animeTitle.substr(0, 15) + "...");
  }, [animeTitle]);

  return (
    <div className="p-2 text-white bg-blue-500 rounded-sm text-center bg-opacity-10">
      <img src={animeImage} alt={animeTitle} />
      <h1 className="p-4 font-bold uppercase">{shortenedTitle}</h1>
      <a
        href={animeURL}
        alt="Anime"
        target="blank"
        className="bg-yellow-400 hover:bg-yellow-500 w-full text-gray-900 font-bold py-3 rounded-sm inline-block"
      >
        Show Details
      </a>
    </div>
  );
};

export default AnimeCard;
