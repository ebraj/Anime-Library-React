import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import Header from "./Header";
import AnimeCard from "./AnimeCard";

const App = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [results, setResults] = useState([]);
  const getDatas = async (_temp) => {
    const result = await axios.get("https://api.jikan.moe/v3/search/anime", {
      params: {
        q: `${_temp}`,
      },
    });
    const obtainedResults = result.data.results;
    setResults(obtainedResults);
  };
  //Getting the search term
  const getSearchedTerm = (_temp) => {
    setSearchedTerm(_temp);
    getDatas(_temp);
  };
  return (
    <>
      <Header getSearchedTerm={getSearchedTerm} />
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
