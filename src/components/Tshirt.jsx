import React from 'react';
import '../styles/tshirt.css'

export default function Tshirt({key, punchline, collection, tshirtColor, embroideryColor, price, coverImg, stock, description}) {
    let stocksBadge
    if (stock ===0) {
        stocksBadge = "Sold out"
    } else if (stock >0 && stock<=3) {
        stocksBadge= "Low stocks, hurry !"
    }
    return (
        <li key={key} className='blabla-item'>
        <img src={coverImg}></img>
        {stocksBadge && <div className='blabla-stocks'>{stocksBadge}</div>}
       
        <h3>"{punchline}"</h3>
        <p>Collection : {collection}</p>
        <p>Couleur du tshirt : {tshirtColor}</p>
        <p>Couleur de la broderie : {embroideryColor}</p>
        <p>Prix : {price} euros</p>
        <p>Description: {description}</p>
        </li>
    )
}