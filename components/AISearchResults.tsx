import React from "react";
import { CiLink } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const AISearchResults = () => {
  const links = Array(10).fill(
    "https://www.digitalriver.com/blog/consumer-behavior-trends-2024/",
  );
  return (
    <div className={"overflow-auto"}>
      {links.map((link, idx) => {
        return (
          <div key={idx} className={"flex items-center gap-4 my-2"}>
            <CiLink />
            <span
              className={
                "min-h-6 bg-gray-100 flex-1 p-3 text-xs text-zinc-950 rounded-lg"
              }
            >
              {link}
            </span>
            <MdDelete />
          </div>
        );
      })}
    </div>
  );
};

export default AISearchResults;
