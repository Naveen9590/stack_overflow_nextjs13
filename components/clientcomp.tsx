"use client";
import React from "react";
import Servercomp from "./servercomp";

const Clientcomp = () => {
  console.log("I am a client.where do i render?");
  return (
    <div>
      <h4>clientcomp</h4>

      <Servercomp />
    </div>
  );
};

export default Clientcomp;
