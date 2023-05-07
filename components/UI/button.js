import Link from "next/link";
import classes from "./button.module.css";
import { Fragment } from "react";

function Button({ link, children, onClick }) {
  return (
    <Fragment>
      {link ? (
        <Link href={link} legacyBehavior>
          <a className={classes.btn}>{children}</a>
        </Link>
      ) : (
        <button className={classes.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </Fragment>
  );
}

export default Button;
