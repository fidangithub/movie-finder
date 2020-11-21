import React from "react";
import classes from "./Spinner.css";

const spinner = props => {
    return (
        <div className={classes.SpinnerWrapper}>
            <div className={classes.Loader}></div>
        </div>
    )
};
export default spinner;
