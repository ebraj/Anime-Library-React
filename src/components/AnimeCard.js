import React from "react";

const AnimeCard = (props) => {
  const { animeImage, animeTitle } = props;
  console.log(animeTitle);
  return (
    <div className="p-2 text-white">
      <img src={animeImage} alt={animeTitle} />
      <h1>{animeTitle}</h1>
    </div>
  );
};

export default AnimeCard;
