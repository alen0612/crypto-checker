import { Button } from "@mui/material";
import React from "react";
import "./MoreInfo.css";

function MoreInfo(props) {
  const handleCloseMoreInfo = () => {
    props.setOpenInfo(false);
  };

  return (
    <div className="More-info">
      <div className="More-info-data">
        <Button
          onClick={handleCloseMoreInfo}
          className="Close-more-info-button"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default MoreInfo;
