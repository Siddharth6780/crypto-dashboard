import React, { useEffect, useState } from "react";
import CryptoData from "./cryptoData";
import "./style.css";

export default function App() {
  const [DataAPI, setDataAPI] = useState([]);
  const [search, setSearch] = useState("");

  const getCryptoData = async () => {
    try {
      let url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=30&page=1&sparkline=false";
      const res = await fetch(url);
      const Crypto_data = await res.json();
      setDataAPI(Crypto_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCryptoData();
  }, []);


  return (
    <>
      <h1 className="heading">Search a Currnecy</h1>
      <div className="search-cointainer">
        <form>
          <input
            className="coin-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

  
      <div className="main-div">

      {DataAPI.filter((val) => {
        if (search == "") return val;
        else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((currEle) => {
        return (
          <CryptoData
            key={currEle.id}
            name={currEle.name}
            price={currEle.current_price}
            symbol={currEle.symbol}
            marketcap={currEle.market_cap}
            volume={currEle.total_volume}
            image={currEle.image}
            priceChange={currEle.price_change_percentage_24h}
          />
        );
      })}
      </div>
    </>
  );
}
