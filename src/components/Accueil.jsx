import React, { useState } from "react";
import "../styles/accueil.css";
import { data } from "../data/data";

export default function Accueil() {
  const [slogan, setSlogan] = useState(
    data[Math.floor(Math.random() * data.length)].punchline
  );
  return (
    <div className="blabla-accueil">
      <div>
        <h1>Bienvenue chez nous</h1>
        <p>"{slogan}"</p>
        <button
          onClick={() => {
            setSlogan(data[Math.floor(Math.random() * data.length)].punchline);
          }}
        >
          Une autre punchline !
        </button>
      </div>
    </div>
  );
}
