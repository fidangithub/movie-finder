import React from "react";
import classes from "./MovieOverview.css";

const overview = props => {
    return (
        <div>
            <p className={classes.Header}>SYNOPSIS </p>
            <p className={classes.OverviewText}>
                "{props.overview}"
            </p>
        </div>
    )
}


export default overview;
