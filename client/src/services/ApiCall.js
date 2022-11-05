import axios from "axios";
import { useState } from "react";

const BASE_URL =
  "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency";

const options = {
  method: "GET",
  url: BASE_URL,
  params: { have: "USD", want: "INR", amount: "1" },
  headers: {
    "X-RapidAPI-Key": "167c364c2fmshb419b6c762b8ee5p140fc5jsn522edba8cad4",
    "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
  },
};

export const FetchExchange = async (have) => {
  const [value, setValue] = useState([]);

  await axios
    .get(`${BASE_URL}`, {
      ...options,
      params: { have: have, want: "INR", amount: "1" },
    })
    .then((response) => setValue(response.data.new_amount));
  console.log("from fetch function", value);
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
