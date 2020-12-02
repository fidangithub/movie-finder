import React from "react";
import classes from "./MovieTv.css";

const movieTv = props => {
    console.log("MOVIE/TV");
    return (
        <React.Fragment>
            <div className={classes.SwitchButton}>
                <input className={classes.MTInput} type="checkbox" name="input-switch" id="input-switch" />
                <label className={classes.MTLabel} for="input-switch"></label>
                <div className={classes.Movie}>Movie</div>
                <div className={classes.Tv}>TV</div>
            </div>
        </React.Fragment>
    );
}
export default movieTv;