import React from "react";

const AnimeCard = (props) => {
  const { animeImage, animeTitle } = props;
  console.log(animeTitle);
  return (
    <div className="p-2 text-white p-4 bg-blue-500 m-2 rounded-sm text-center bg-opacity-10">
      <img src={animeImage} alt={animeTitle} />
      <h1 className="p-4">{animeTitle}</h1>
    </div>
  );
};

export default AnimeCard;
