import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState([]);
  const getDatas = async () => {
    const result = await axios.get("https://api.jikan.moe/v3/search/anime", {
      params: {
        q: "Naruto",
      },
    });
    const obtainedResults = result.data.results;
    // console.log(obtainedResults);
    setResults(obtainedResults);
  };
  console.log(results);
  return (
    <div>
      <button onClick={getDatas}>Click Me</button>
    </div>
  );
};

export default App;
