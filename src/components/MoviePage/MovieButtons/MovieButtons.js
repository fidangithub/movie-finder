import React, { useEffect } from "react";
import classes from "./MovieButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const others = props => {
    return (
        <div className={classes.Others}>
            <button className={classes.OtherButton}>
                <FontAwesomeIcon icon={["far", "dot-circle"]} className={classes.Icon} />
                <p>IMDB</p>
            </button>
            <button className={classes.OtherButton}>
                <FontAwesomeIcon icon={["far", "dot-circle"]} className={classes.Icon} />
                <p>Website</p>
            </button>
        </div>
    )
}
export default others;
