import React from "react";
import classes from "./NoResults.css";
import { NavLink } from "react-router-dom";
import NoResults from "../../svg/noResults.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const noResults = props => {
    return (
        <div className={classes.NoResult}>
             <img src={NoResults} alt="" className={classes.Image}/>
             <p className={classes.Text}>No results found</p>
             <NavLink className={classes.Link} to={`/discover/movie/Popular`}>
                <FontAwesomeIcon icon={["fas", "home"]} className={classes.Icon} />
                <p>Back to Page</p>
             </NavLink>
        </div>
    )
}

export default noResults;
