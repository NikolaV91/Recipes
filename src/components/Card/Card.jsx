import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const deleteRecipe = () => {
    fetch(
      `https://6245a34b6b7ecf057c21c934.mockapi.io/recipes/${props.obj.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.recipe),
      }
    )
      .then((res) => res.json())
      .then((res) => props.setShouldUpdate());
  };

  return (
    <Link to={`/singlePage/${props.obj.id}`}>
      <div
        className="card"
        onClick={() => props.setSelectedRecipe(props.obj.id)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            deleteRecipe();
          }}
          className="closeBtn"
        >
          Remove
        </button>
        <img src={props.obj.image} alt="meal" />
        <h3>{props.obj.meal}</h3>
      </div>
    </Link>
  );
};
export default Card;
