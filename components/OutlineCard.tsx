import React from "react";

const OutlineCard = () => {
  return (
    <div className={"overflow-auto"}>
      {Array(10)
        .fill(1)
        .map(() => (
          <div className="card bg-base-100 w-full shadow-xl my-5 p-4">
            <p>We are using cookies for no reason.</p>
          </div>
        ))}
    </div>
  );
};

export default OutlineCard;
