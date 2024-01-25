import React from "react";
import './style.css';
import numberFormat from "../../utils.js"

function Card({ card }) {
  return card !== null ?
    (
      <div className="Card">
        <img src={card.img} alt="picture" />
        <span className="Card-author">{card.author}</span>
        <h3 className="Card-title">{card.title}</h3>
        <span className="Card-materials">{card.materials}</span>
        <span className="Card-price">{`${numberFormat(card.price)} руб`}</span>
        <button className="Card-tobasket">В корзину</button>
      </div>
    )
    :
    <div className="Card null">
    </div>
}

export default Card;