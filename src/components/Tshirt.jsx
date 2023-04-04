import React from "react";
import "../styles/tshirt.css";

export const Tshirt = ({
  tshirt: {
    stock,
    coverImg,
    collection,
    tshirtColor,
    embroideryColor,
    price,
    description,
    punchline,
  },
}) => {
  let stocksBadge = "";
  if (stock === 0) {
    stocksBadge = "Sold out";
  }
  if (stock > 0 && stock <= 3) {
    stocksBadge = "Low stocks, hurry !";
  }
  return (
    <li className="blabla-item">
      <img src={coverImg}></img>
      {stocksBadge && <div className="blabla-stocks">{stocksBadge}</div>}
      <h3>"{punchline}"</h3>
      <p>Collection : {collection}</p>
      <p>Couleur du tshirt : {tshirtColor}</p>
      <p>Couleur de la broderie : {embroideryColor}</p>
      <p>Prix : {price} euros</p>
      <p>Description: {description}</p>
    </li>
  );
};
