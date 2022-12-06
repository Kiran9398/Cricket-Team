import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Studentitem } from "./Studentitem";
import img1 from "../Images/off.jpg";
import img2 from "../Images/on.jpg";
import './ClassX.css';

export default function ClassX() {
  const bulbStatus = useSelector((state) => state.gameReducer.bulb);
  const [img, setImage] = useState(img1);
  const onClickHandler = () => {
    setImage(img2);
  };

  const students = [
    {
      name: "Raveen Sinha",
      phy: 7,
      skill: 8,
    },
    {
      name: "Sumit Kumar",
      phy: 6,
      skill: 9,
    },
    {
      name: "Raheem Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "lalit Kadarkar",
      phy: 7,
      skill: 7,
    },
    {
      name: "Prakash Kumar",
      phy: 5,
      skill: 7,
    },
    {
      name: "Areen Khan",
      phy: 8,
      skill: 9,
    },
    {
      name: "Aftab Shaikh",
      phy: 8,
      skill: 6,
    },
  ];
  return (
    <div className="main3">
      
      <div className="text-center">
      <img className="ml-2 mb-2" src={img} height="38px" width="40px" />
      <button onClick={onClickHandler}  className="button-el btn btn-primary mb-1 ml-2">
        ON
      </button>
      </div>

      <Grid container spacing={3}>
        {students.map((item) => (
          <Grid item xs={3}>
            <Studentitem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
