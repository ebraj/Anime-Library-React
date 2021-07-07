import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import Header from "./Header";
import AnimeCard from "./AnimeCard";

const App = () => {
  const [results, setResults] = useState([]);
  const getDatas = async () => {
    const result = await axios.get("https://api.jikan.moe/v3/search/anime", {
      params: {
        q: "Death Note",
      },
    });
    const obtainedResults = result.data.results;
    // console.log(obtainedResults);
    setResults(obtainedResults);
  };
  console.log(results);
  return (
    <>
      <Header />
      {/* <div className="bg-pink-200 text-center p-5">
        <button onClick={getDatas}>SHOW NARUTO ANIME</button>
      </div> */}
      <div>
        {results.map((result) => {
          return (
            <AnimeCard
              animeTitle={result.title}
              animeImage={result.image_url}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
