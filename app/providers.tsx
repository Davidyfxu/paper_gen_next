"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Toaster position={"top-center"} />
      {children}
    </>
  );
};

export default Providers;
