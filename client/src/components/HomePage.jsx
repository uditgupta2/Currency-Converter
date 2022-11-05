import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import moment from "moment/moment";
import { Typography } from "@mui/material";
import "./HomePage.css";

const date = new Date();

const HomePage = () => {
  const [time, setTime] = useState();

  // useEffect(() => {
  //   setTime(date.getMinutes);
  // }, []);

  return (
    <div className="container">
      <div className="header">
        <Typography variant="h5">Currency Exchange Rates</Typography>
        <Typography variant="subtitle2">
          Displaying Exchange Rates for 5 Currencies in INR
        </Typography>
      </div>
      <div className="bar-chart">
        <BarChart />
        <Typography
          sx={{ color: "grey", marginTop: "10px" }}
          variant="subtitle2"
          className="subtitle"
        >
          Last Updated {moment(time).startOf("ss").fromNow()}.
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;
