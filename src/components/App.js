import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import Header from "./Header";
import AnimeCardContainer from "./AnimeCardContainer";
import MainSection from "./MainSection";

const App = () => {
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
    getDatas(_temp);
  };
  //useEffect
  useEffect(() => {
    getDatas("Death Note");
  }, []);
  return (
    <>
      <Header getSearchedTerm={getSearchedTerm} />
      <div className="h-8"></div>
      <MainSection obtainedList={results} />
      {/* <AnimeCardContainer /> */}
    </>
  );
};

export default App;
