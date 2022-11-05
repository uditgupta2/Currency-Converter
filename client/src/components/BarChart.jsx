import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./BarChart.css";
// import { FetchExchange } from "../services/ApiCall";
import axios from "axios";

const BASE_URL = "http://localhost:5000/data";

// const options = {
//   // method: "GET",
//   // url: BASE_URL,
//   // params: { have: "USD", want: "INR", amount: "1" },
//   headers: {
//     "X-RapidAPI-Key": "167c364c2fmshb419b6c762b8ee5p140fc5jsn522edba8cad4",
//     "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
//   },
// };

const BarChart = () => {
  const [amount, setAmount] = useState([]);

  const labels = ["KWD", "BHD", "EUR", "JOD", "USD"];

  const fetchExchange = async (have, index) => {
    await axios
      .get(`${BASE_URL}`, {
        params: {
          have: have,
        },
      })
      .then((response) => {
        console.log(response.data);

        if (amount.length < 6) {
          setAmount((amount) => [
            ...amount,
            {
              index: index,
              amount: response.data.new_amount,
              currency: response.data.old_currency,
            },
          ]);
        }
      });
  };

  console.log("from fetch function", amount);

  useEffect(() => {
    labels.map((currency, index) => {
      fetchExchange(currency, index);
    });
  }, []);

  const data = {
    labels: amount.map((object) => {
      return object.currency;
    }),
    datasets: [
      {
        label: "Top 5 Currencies",
        data: amount.map((object) => {
          return object.amount;
        }),
        backgroundColor: "rgba(53, 110, 240, 0.8)",
      },
    ],
  };

  return (
    <div className="bar-chart-container">
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarChart;
