import React from "react";
import { CountryCardStyle } from "./style/CountryCard.styled";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.detail}`);
  };

  return (
    <CountryCardStyle onClick={handleClick}>
      <img src={props.img} alt={props.alt} />
      <div className="info">
        <h3>{props.name}</h3>
        <p>
          Population:<span>{" " + props.population}</span>
        </p>
        <p>
          Region:<span>{" " + props.region}</span>
        </p>
        <p>
          Capital:<span>{" " + props.capital}</span>
        </p>
      </div>
    </CountryCardStyle>
  );
};

export default CountryCard;
