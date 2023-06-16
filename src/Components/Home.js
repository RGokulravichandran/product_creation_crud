import axios from "axios";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [MobileData, setMobileData] = useState([0]);
  useEffect(() => {
    axios
      .get("https://644d3587cfdddac9709fac09.mockapi.io/mobile")
      .then((response) => setMobileData(response.data));
  }, [MobileData]);

  return (
    <div className="Home">
      {MobileData.map((data) => (
        <BrandLogos data={data} />
      ))}
    </div>
  );
}

function BrandLogos({ data }) {
  const navigate = useNavigate();
  return (
    <div className="BrandLogo">
      <div className=" LogoCard">
        <img
          onClick={() => navigate(`/${data.id}`)}
          className="bg-image"
          src={data.image}
          alt={data.name}
        ></img>
      </div>
    </div>
  );
}

export default Home;
