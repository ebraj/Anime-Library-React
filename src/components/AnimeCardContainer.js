import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeCardContainer = (props) => {
  //Object Destructuring
  const { obtainedList } = props;
  return (
    <div className="grid-container gap-4 w-full">
      {obtainedList.map((item) => {
        return (
          <AnimeCard
            key={item.title}
            animeImage={item.image_url}
            animeTitle={item.title}
            animeURL={item.url}
          />
        );
      })}
    </div>
  );
};

export default AnimeCardContainer;
