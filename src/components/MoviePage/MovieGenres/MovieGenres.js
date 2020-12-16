import React from "react";
import classes from "./MovieGenres.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const genres = props => {
    let genres = props.genres.map((genre => {
        return (<div className={classes.Section}>
                <FontAwesomeIcon icon={["far", "dot-circle"]} className={classes.Icon} />
                <p className={classes.Type}>{genre.name}</p>
            </div>);
    }));
    return (
        <div className={classes.Sections}>
            {genres}
        </div>
    )
}
export default genres;
