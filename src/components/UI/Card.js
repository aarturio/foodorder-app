import classes from "./Card.module.css";
import { Fragment } from "react";

const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
