import React from "react";

const UserInputLink = () => {
  return (
    <div className={"rounded-lg border p-5 flex flex-col gap-4"}>
      <div className={"flex flex-col"}>
        <span>Enter Link to Search</span>
        <input
          type="text"
          placeholder="Paste your URL here"
          className="input input-bordered w-full mt-3"
        />
      </div>
      <div className={"flex flex-col"}>
        <span>Enter Keyword to Search</span>
        <input
          type="text"
          placeholder="Enter a keyword you want PaperGen to search"
          className="input input-bordered w-full mt-3"
        />
      </div>
    </div>
  );
};

export default UserInputLink;
