import React from "react";
import "../styles/categories.css";

export default function Categories({
  activeCategory,
  setActiveCategory,
  collectionCategory,
}) {
  return (
    <div className="blabla-categories">
      <ul>
        {collectionCategory.map((category, index) => (
          <li key={index} onClick={(e) => setActiveCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
