"use client";
import React, { useState } from "react";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import AISearchResults from "@/components/AISearchResults";

const UserInputLink = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div
        className={`rounded-lg border p-5 flex flex-col gap-4 transition-all duration-500 ${
          isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen"
        }`}
      >
        <div className={"flex flex-col"}>
          <span>Enter Link to Search</span>
          <div className={"flex justify-between gap-2 items-center mt-2"}>
            <input
              type="text"
              placeholder="Paste your URL here"
              className="input input-bordered flex-1"
            />
            <button className="btn btn-outline">Submit</button>
          </div>
        </div>
        <div className={"flex flex-col"}>
          <span>Enter Keyword to Search</span>
          <div className={"flex justify-between gap-2 items-center mt-2"}>
            <input
              type="text"
              placeholder="Enter a keyword you want PaperGen to search"
              className="input input-bordered flex-1"
            />
            <button className="btn btn-outline">Submit</button>
          </div>
        </div>
      </div>
      <button onClick={toggleCollapse} className="btn btn-block">
        {isCollapsed ? <BiArrowFromTop /> : <BiArrowFromBottom />}
      </button>
      <div className="divider"></div>
      <AISearchResults />
    </div>
  );
};

export default UserInputLink;
