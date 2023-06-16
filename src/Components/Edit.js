import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import MediaCard from "./Card";

function Edit() {
  const { id, modelId } = useParams();
  const [MbData, setMbData] = useState();
  useEffect(() => {
    axios
      .get(`https://644d3587cfdddac9709fac09.mockapi.io/mobile/${id}`)
      .then((response) => setMbData(response.data.models));
  }, [MbData]);

  return (

    <div className="Edit">
 
      {/* {MbData
        ? MbData.filter((data) => {
            if (data.id === modelId) {
              <h1>{data}</h1>;
            }
          })
        : console.log("loading...")} */}
      {/* <MediaCard data={MbData} /> */}
    </div>
  );
}

export default Edit;
