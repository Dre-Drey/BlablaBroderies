import React from 'react';
import '../styles/collections.css'
import {data} from '../data/data'
import Tshirt from './Tshirt'

export default function Collections() {
    const tshirts = data.map((tshirt)=> {
        return <Tshirt
        key = {tshirt.id}
        punchline= {tshirt.punchline}
        collection = {tshirt.collection}
        tshirtColor = {tshirt.tshirtColor}
        embroideryColor = {tshirt.embroideryColor}
        price = {tshirt.price}
        coverImg = {tshirt.coverImg}
        stock = {tshirt.stock}
        description = {tshirt.description}
        />
      })
    return (
        <>
        <div className='blabla-collection-display'>
            <h2>Collections</h2>
            <div className='blabla-collection'>
            {tshirts}
            </div>
        </div>
        </>
    )
}