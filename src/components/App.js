import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing the components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import AnimeCardContainer from "./AnimeCardContainer";

const App = () => {
  const [results, setResults] = useState([]);
  const [isErr, setIsErr] = useState(false);
  const getDatas = async (_temp) => {
    const result = await axios.get("https://api.jikan.moe/v3/search/anime", {
      params: {
        q: `${_temp}`,
        limit: 12,
      },
    });
    return result;
  };
  //Getting the search term
  const getSearchedTerm = (_temp) => {
    getDatas(_temp)
      .then((res) => {
        if (res.data.results.length !== 0) {
          setIsErr(false);
          console.log(res);
          const obtainedResults = res.data.results;
          setResults(obtainedResults);
        } else {
          setIsErr(true);
        }
      })
      .catch((e) => {
        // setResults([]);
        setIsErr(true);
      });
  };
  //useEffect
  useEffect(() => {
    getDatas("Death Note").then((res) => {
      console.log(res);
      const obtainedResults = res.data.results;
      setResults(obtainedResults);
    });
  }, []);
  return (
    <>
      <div>
        <Header getSearchedTerm={getSearchedTerm} />
        <div className="h-8"></div>
        {/* <MainSection obtainedList={results} /> */}
        <div className="container px-2 mx-auto">
          <div className="flex flex-col sm:flex-row">
            <Sidebar />
            {isErr ? (
              <div
                className="font-thin text-gray-400 bg-blue-500  bg-opacity-10 text-2xl w-full text-center
              py-40"
              >
                <h1>Searched Anime Not Found😔</h1>
              </div>
            ) : (
              <AnimeCardContainer
                obtainedList={results}
                className="flex-grow bg-pink-200"
              />
            )}
          </div>
        </div>
        <div className="h-8"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
