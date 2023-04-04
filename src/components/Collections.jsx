import React from "react";
import "../styles/collections.css";
import { data } from "../data/data";
import { Tshirt } from "./Tshirt";
import Categories from "./Categories";
import { useState } from "react";

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("");
  const collectionCategory = data.reduce((acc, curr) => {
    if (acc.includes(curr.collection)) {
      return acc;
    }
    return acc.concat(curr.collection);
  }, []);

  return (
    <>
      <div className="blabla-collection-display">
        <h2>Collections</h2>
        <Categories
          collectionCategory={collectionCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <div className="blabla-collection">
          {data.map((tshirt) => (
            <Tshirt key={tshirt.id} tshirt={tshirt} />
          ))}
        </div>
      </div>
    </>
  );
}
