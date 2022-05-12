import { Button } from "@mui/material";
import React from "react";
import "./MoreInfo.css";

function MoreInfo(props) {
  const handleCloseMoreInfo = () => {
    props.setLoading(true);
    props.setOpenInfo(false);
    props.handleLoading();
  };

  console.log(props.selectedData);

  return (
    <div className="More-info">
      <div className="More-info-data">
        <div className="More-info-name">{props.selectedData[0].name}</div>
        <div className="More-info-image">
          <img src={props.selectedData[0].image} alt="CoinImage"></img>
        </div>
        <div className="More-info-symbol">
          Symbol: <br />
          {props.selectedData[0].symbol}
        </div>
        <div className="More-info-current-price">
          Current Price: <br />
          {props.selectedData[0].currentPrice}
        </div>
        <div className="More-info-total-volume">
          Total Volume: <br /> {props.selectedData[0].totalVolume}
        </div>
        <div className="More-info-high">
          24hr High: <div className="High">$ {props.selectedData[0].high}</div>
        </div>
        <div className="More-info-low">
          24hr Low: <div className="Low">$ {props.selectedData[0].low}</div>
        </div>
        <Button
          onClick={handleCloseMoreInfo}
          className="Close-more-info-button"
          variant="contained"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default MoreInfo;
