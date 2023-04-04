import React from "react";
import "../styles/about.css";
import Maureen from "../assets/Picture_Maureen.jpg";
import Audrey from "../assets/Picture_Audrey.jpg";

export default function About() {
  return (
    <div className="blabla-about">
      <h2>About</h2>
      <div className="blabla-us">
        <div className="blabla-entreprise">
          <h3>Blabla c'est quoi ?</h3>
          <div className="blabla-entreprise-texte">
            <p> Blabla c'est t-shirts !</p>
            <ul>
              <li>bio et en coton</li>
              <li>unisexes</li>
              <li>du XS au 5XL</li>
              <li>brodés à la main à Paris</li>
              <p>
                Pour respecter la nature et parce qu'on mise sur une production
                raisonnée, les tshirts sont produits à la demande.
              </p>
            </ul>
          </div>
        </div>
        <div className="blabla-personnes">
          <h3>Maureen & Audrey</h3>
          <div className="blabla-personnes-pictures">
            <img src={Maureen}></img>
            <p>
              On n'a pas fait Sciences po, ni HEC, ni une école de design, ni un
              master en couture. mais on aime le fun, les comédies romantiques,
              rupaul, et faire plaisir aux gens. on vous propose de partager un
              peu de notre amour des mots en les portant avec style.
            </p>
            <img src={Audrey}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
