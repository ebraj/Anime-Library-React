import React from "react";

const AnimeItem = (props) => {
  const { title } = props;
  return (
    <p className="mx-3 py-4 border-gray-700 text-gray-400 border-b">{title}</p>
  );
};

export default AnimeItem;
