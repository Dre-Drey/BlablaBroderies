import React from 'react';
import collections from '../assets/collections.png'
import '../styles/collections.css'

export default function Collections({punchline, collection, couleur, broderie, prix}) {
    return (
        <div className='blabla-collections'>
           <h2>Collections</h2>
           <div className='blabla-item'>
            <h3>"{punchline}"</h3>
            <p>Collection : {collection}</p>
            <p>Couleur du t-shirt :  {couleur}</p>
            <p>Couleur de la broderie : {broderie}</p>
            <p>Prix : {prix} euros</p>
           </div>
        </div>
    )
}