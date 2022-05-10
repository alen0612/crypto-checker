import "./App.css";
import DataDisplayer from "./Components/DataDisplayer/DataDisplayer";
import SearchBar from "./Components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => {
        //console.log(res.data);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="Crypto-checker">Crypto Checker</div>
      <SearchBar data={data} setData={setData} getData={getData} />
      <DataDisplayer data={data} />
    </div>
  );
}

export default App;
