import React from "react";
import classes from "./ErrorPage.css";
import ErrorSvg from "../../svg/errorPage.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const errorPage = props => {
    return (
        <div className={classes.ErrorPage}>
            <img src={ErrorSvg} alt="" className={classes.Image}/>
            <p className={classes.Text}>Something went wrong. Please try again later.</p>
            <NavLink className={classes.Link} to={ `/discover/movie/Popular`}>
                <FontAwesomeIcon icon={["fas", "home"]} className={classes.Icon} />
                <p>Back to Page</p>
             </NavLink>
        </div>
    );
}
export default errorPage;
