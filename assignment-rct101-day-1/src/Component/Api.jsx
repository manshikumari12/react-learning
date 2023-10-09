import React, { useState, useEffect } from 'react';
import gettingData from '../Utilet/gettingData';
import CardItem from './CardItem';

const Api = () => {
  const [data, setData] = useState([]);

  const fetchData = async (id) => {
    try {
      const response = await gettingData(id);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", margin: "20px" }}>
      {
        data?.map((card) => (
          <CardItem key={card.id} {...card} />
        ))
      }
    </div>
  );
}

export default Api;
