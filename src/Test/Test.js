import axios from "axios";

import React from "react";

async function Test() {
  const options = {
    method: "GET",
    url: "https://car-models-and-data.p.rapidapi.com/api/v1/brands",
    headers: {
      "X-RapidAPI-Key": "3c5b1c3893msh9f52b709af97a5bp18dca3jsnb2698ece16f3",
      "X-RapidAPI-Host": "car-models-and-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  return <div>Test</div>;
}

export default Test;
