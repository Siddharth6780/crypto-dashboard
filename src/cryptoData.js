import React from "react";

const CryptoData = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <>
      <div className="crypto-data">
        <div className="main-cointainer">
          <div className="name">
            <img src={image} alt="images" className="image_crypto" />
            <div className="curr_name">{name}</div>
          </div>
          <div className="short-form">{symbol.toUpperCase()}</div>
          <div className="current-price">${price}</div>
          <div className="volume">Volume: ${volume.toLocaleString()}</div>
          {priceChange < 0 ? (
            <div className="percentage-change red">{priceChange.toFixed(2)}%</div>
          ) : (
            <div className="percentage-change green">{priceChange.toFixed(2)}%</div>
          )}
          <div className="market-cap">Mkt Cap: ${marketcap.toLocaleString()}</div>
        </div>
      </div>
    </>
  );
}
export default CryptoData;
