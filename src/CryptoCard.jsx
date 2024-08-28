// src/CryptoCard.jsx
import React from 'react';

const CryptoCard = ({ crypto }) => {
  const changeClass = crypto.change < 0 ? 'change negative' : 'change positive';

  return (
    <div className="crypto-card">
      <h2>{crypto.name}</h2>
      <p>Symbol: {crypto.symbol}</p>
      <p className="price">Price: ${crypto.price}</p>
      <p>Market Cap: ${crypto.marketCap}</p>
      <p className={changeClass}>24h Change: {crypto.change} %</p>
    </div>
  );
};

export default CryptoCard;
