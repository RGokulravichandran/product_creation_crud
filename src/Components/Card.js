import * as React from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ data, id }) {
  const navigate = useNavigate();
  return (
    <div className="Card">
      <div
        className="CardImage"
        onClick={() => {
          navigate(`/${id}/${data.id}`);
        }}
      >
        <img src={data.image}></img>
      </div>
      <div className="CardContent">
        <Typography
          className="Typography"
          variant="h5"
          sx={{ cursor: "pointer" }}
        >
          {data.name}
        </Typography>
        <div className="PriceDiv">
          <div className="DollerDiv">
            <Typography variant="h6">$</Typography>
            <Typography variant="h4">{data.price}</Typography>
          </div>
          <Typography
            variant="h7"
            sx={{ color: "red", textDecoration: "line-through" }}
          >
            M.R.P: ${data.MRP}
          </Typography>
        </div>
        <Typography variant="h5">
          Offers:<Typography variant="h6">({data.offers[0]},</Typography>
          <Typography variant="h6">{data.offers[1]})</Typography>
        </Typography>
      </div>
    </div>
  );
}

// function HandleClick(data) {
//   const navigate = useNavigate();
//   return navigate(`/:id/${data.id}`);
// }
