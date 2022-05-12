import "./App.css";
import DataDisplayer from "./Components/DataDisplayer/DataDisplayer";
import SearchBar from "./Components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import MoreInfo from "./Components/MoreInfo/MoreInfo";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoading();
    getData();
  }, []);

  const getData = (keyWords) => {
    console.log("keyWords: " + keyWords);
    console.log(keyWords === undefined);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => {
        //console.log(res.data);
        if (keyWords !== "" && keyWords !== undefined) {
          Object.entries(res.data).forEach(([key, value]) => {
            //console.log(value);
            if (
              value.name.toLowerCase().includes(keyWords.toLowerCase()) ||
              value.symbol.toLowerCase().includes(keyWords.toLowerCase())
            ) {
              setData((prev) => [
                ...prev,
                {
                  name: value.name,
                  symbol: value.symbol.toUpperCase(),
                  image: value.image,
                  currentPrice: value.current_price,
                  totalVolume: value.total_volume,
                  high: value.high_24h,
                  low: value.low_24h,
                  changePercentage: value.price_change_percentage_24h,
                },
              ]);
            }
          });
        } else {
          Object.entries(res.data).forEach(([key, value]) => {
            //console.log(value);

            setData((prev) => [
              ...prev,
              {
                name: value.name,
                symbol: value.symbol.toUpperCase(),
                image: value.image,
                currentPrice: value.current_price,
                totalVolume: value.total_volume,
                high: value.high_24h,
                low: value.low_24h,
                changePercentage: value.price_change_percentage_24h,
              },
            ]);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 750);
  };

  return openInfo ? (
    <div className="App">
      <MoreInfo
        setOpenInfo={setOpenInfo}
        selectedData={selectedData}
        setLoading={setLoading}
        handleLoading={handleLoading}
      />
    </div>
  ) : (
    <div className="App">
      <div className="Crypto-checker">Crypto Checker</div>
      <SearchBar data={data} setData={setData} getData={getData} />
      {loading ? (
        <div className="Loading">
          <CircularProgress />
        </div>
      ) : (
        <DataDisplayer
          data={data}
          openInfo={openInfo}
          setSelectedData={setSelectedData}
          setOpenInfo={setOpenInfo}
        />
      )}
    </div>
  );
}

export default App;
