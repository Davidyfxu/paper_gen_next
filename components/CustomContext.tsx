import React from "react";

const CustomContext = () => {
  return (
    <div className={"rounded-lg border p-5 flex flex-col gap-4"}>
      <div>Context Input</div>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Enter a keyword you want PaperGen to search"
      />
      <button className="btn">Submit</button>
    </div>
  );
};

export default CustomContext;
