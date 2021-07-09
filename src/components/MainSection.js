import React from "react";

// Importing the components
import AnimeCardContainer from "./AnimeCardContainer";
import Sidebar from "./Sidebar";

const MainSection = (props) => {
  const { obtainedList } = props;
  return (
    <div className="container px-2 mx-auto">
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <AnimeCardContainer
          obtainedList={obtainedList}
          className="flex-grow bg-pink-200"
        />
      </div>
    </div>
  );
};

export default MainSection;
