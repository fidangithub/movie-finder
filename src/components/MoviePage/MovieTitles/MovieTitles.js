import React from "react";
import classes from "./MovieTitles.css";

const titles = props => {
    return (
        <div className={classes.Title}>
            <p className={classes.Name}>{props.title}</p>
            {props.tagline ? <p className={classes.Tagline}> "{props.tagline}"</p> : null}
        </div>
    )
}


export default titles;
