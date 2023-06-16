import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import MediaCard from "./Card";
import { SignalCellularNoSimOutlined } from "@mui/icons-material";

function Mobiles() {
  const [MobilesData, setMobilesData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://644d3587cfdddac9709fac09.mockapi.io/mobile/${id}`)
      .then((response) => setMobilesData(response.data.models));
  }, [MobilesData]);

  return (
    <div className="Mobiles">
      {MobilesData ? (
        MobilesData.map((data) => <MediaCard data={data} id={id} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Mobiles;
