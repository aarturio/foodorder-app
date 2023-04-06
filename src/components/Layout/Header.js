import { Fragment } from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div classes={classes["main-image"]}>
        <img src={image} alt="meals" />
      </div>
    </Fragment>
  );
}

export default Header;
