const express = require("express");
const axios = require("axios");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const BASE_URL =
  "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency";

const options = {
  headers: {
    "X-RapidAPI-Key": "167c364c2fmshb419b6c762b8ee5p140fc5jsn522edba8cad4",
    "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
  },
};

app.get("/data", async (req, res) => {
  const { have } = req.query;
  try {
    await axios
      .get(`${BASE_URL}`, {
        ...options,
        params: { have: have, want: "INR", amount: "1" },
      })
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (err) {
    res.json(err);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
