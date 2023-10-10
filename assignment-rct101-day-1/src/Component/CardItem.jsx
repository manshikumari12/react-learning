import React from 'react';
import "../Css/card.css"
import Counter from './Counter';


const CardItem = ({ title, price, image, description, category }) => {
  return  <div className='cardlist'  >
  
      <img className='poster' src={image} alt={category}/>
      <h1 className='cardtitle' >{title}</h1>
      {/* <p>{description}</p> */}
      <p>{category}</p>
      <p className='cardprice'>Rs : {price}</p>
     
      <Counter/>
     
    </div>
  
};

export default CardItem;

