import React from "react";
import classes from "./MovieButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const others = props => {
    let imdb = props.imdb ? (
        <a href={`https://www.imdb.com/title/${props.imdb}/`} className={classes.Button} target="blank">
            <FontAwesomeIcon icon={["fab", "imdb"]} className={classes.Icon} />
            <p>IMDB</p>
        </a>
    ) : null;

    let website = props.website ? (
        <a href={`${props.website}`}className={classes.Button} target="blank">
            <FontAwesomeIcon icon={["fas", "external-link-alt"]} className={classes.Icon} />
            <p>Website</p>
        </a>
    ) : null;
    return (
        <div className={classes.Others}>
            {imdb}
            { website}
        </div>
    )
}
export default others;
