import React from 'react';
import "../Css/card.css"
import Counter from './Counter';


const CardItem = ({ title, price, image, description, category }) => {
  return  <div  style={{ display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  padding: "30px",
  flexDirection: "column",
  borderRadius:"4%"}}>
      <h1>{title}</h1>
      <img className='poster' src={image} alt={category}/>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <Counter/>
     
    </div>
  
};

export default CardItem;

