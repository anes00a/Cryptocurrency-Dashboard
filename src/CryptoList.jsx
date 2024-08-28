// src/CryptoList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
          headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': '8b1ce25b54msh8e39c7abe647df1p1810fbjsn2a948abc2c23'  
          }
        });
        setCryptos(response.data.data.coins);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {cryptos.map(crypto => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default CryptoList;

