import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import Header from "./Header";
import AnimeCardContainer from "./AnimeCardContainer";

const App = () => {
  const [searchedList, setSearchedList] = useState("");
  const [results, setResults] = useState([]);
  const getDatas = async (_temp) => {
    const result = await axios.get("https://api.jikan.moe/v3/search/anime", {
      params: {
        q: `${_temp}`,
        limit: 12,
      },
    });
    const obtainedResults = result.data.results;
    setResults(obtainedResults);
  };
  //Getting the search term
  const getSearchedTerm = (_temp) => {
    setSearchedList(_temp);
    getDatas(_temp);
  };
  return (
    <>
      <Header getSearchedTerm={getSearchedTerm} />
      <div className="h-8"></div>
      <AnimeCardContainer obtainedList={results} />
    </>
  );
};

export default App;
