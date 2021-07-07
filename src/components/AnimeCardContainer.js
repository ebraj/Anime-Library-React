import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeCardContainer = (props) => {
  //Object Destructuring
  const { obtainedList } = props;
  console.log(obtainedList);
  return (
    <div className="grid-container container mx-auto">
      {obtainedList.map((item) => {
        return (
          <AnimeCard
            key={item.title}
            animeImage={item.image_url}
            animeTitle={item.title}
          />
        );
      })}
    </div>
  );
};

export default AnimeCardContainer;
