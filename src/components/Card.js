import React from "react";

import {Button} from "../components/Button";

import "./Card.css";

function Card(props) {
  return (
    <section className="card">
      <div className="text">{props.name.toUpperCase() + " " + props.model}</div>
      <img src={props.img} alt="" className="image" />
      <div className="text">
        {"Year: " + props.year + " HP: " + props.horsePower}
      </div>
      <div className="text">{props.price + "$"}</div>
      <div className="buttonCnt">
        <Button
          buttonStyle="btn--outline"
          link=""
          onClick={(event) => {
            console.log("Thank You!");
          }}
          type="Buy"
        >
          BUY
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

export default Card;
