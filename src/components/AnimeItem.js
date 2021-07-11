import React from "react";

const AnimeItem = (props) => {
  const { title, animeURL } = props;
  return (
    <a
      href={animeURL}
      alt={title}
      target="blank"
      className="mx-3 py-4 border-gray-700 text-gray-400 border-b hover:text-gray-100 cursor-pointer block"
    >
      {title}
    </a>
  );
};

export default AnimeItem;
