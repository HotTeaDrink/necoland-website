import React from "react";

function CardItem(props) {
  return (
    <>
      <li id={props.id} className="cards__item cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img draggable="false" className="cards__item__img" alt="Travel" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
