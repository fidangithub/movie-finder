import React from "react";
import classes from "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

const list = props => {

    let overviewData = props.overview;
    if (overviewData.split(" ").length >= 35) {
        overviewData = overviewData.split(" ").slice(0, 35).join(" ") + " .....";
    }
    return (
        <NavLink to={`/discover`} className={classes.Card}>
            <img src={`${props.url}w500/${props.poster}`} alt="" className={classes.CardImage} />
            <div className={classes.CardWrapper}>
                <div className={classes.CardWrap}></div>
            </div>
            <div className={classes.CardHeader}>
                <p className={classes.CardName}>{props.title}</p>
                <div className={classes.StarIconWrapper}>
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                </div>
            </div>
            <div className={classes.CardTheme}>
                “{overviewData}”
            </div>
            <p className={classes.CardBottom}>{props.title}</p>
        </NavLink>
    )
}

export default list;
