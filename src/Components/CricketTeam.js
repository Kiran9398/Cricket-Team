import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CricketTeam.css";

export const CricketTeam = () => {
  const cricTeam = useSelector((state) => state.gameReducer.cricketTeam);
  console.log("cricteam==>", cricTeam);
  return (
    <div>
      <h1 className="text-center">Cricket team </h1>
      {cricTeam.map((elem) => {
        return (
          <div className="team-details d-flex flex-row justify-content-center">
            <h3>{elem.name} </h3>
          </div>
        );
      })}
    </div>
  );
};
