import React from "react";
import AnimeCardContainer from "./AnimeCardContainer";
import Sidebar from "./Sidebar";

const MainSection = (props) => {
  const { obtainedList } = props;
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
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
