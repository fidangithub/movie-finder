import React from "react";
import classes from "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import EmptyCover from "../../../svg/emptyCover.svg"
// import Star from "./Star/Star";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

let image;
const list = props => {
    if(props.poster){
        image = (<img src={`${props.url}w500/${props.poster}`} alt="" className={classes.CardImage}/>);
    }else{
        image = (<img src={EmptyCover} alt="" className={classes.CardImage}/>);
    }


    let overviewData = props.overview;
    if (overviewData.split(" ").length >= 45) {
        overviewData = overviewData.split(" ").slice(0, 45).join(" ") + " .....";
    }
    return (
        <NavLink to={`/movie/${props.id}`} className={classes.Card}>
            {/* <img src={`${props.url}w500/${props.poster}`} alt="" className={classes.CardImage} /> */}
            {image}
            <div className={classes.CardWrapper}>
                <div className={classes.CardWrap}></div>
            </div>
            <div className={classes.CardHeader}>
                <p className={classes.CardName}>{props.title}</p>
                {/* <Star/> */}
                <div className={classes.StarIconWrapper}>
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                </div>
            </div>
            <div className={classes.CardTheme}>
                {props.overview ? `"${overviewData}"` : null}
            </div>
            <p className={classes.CardBottom}>{props.title}</p>
        </NavLink>
    )
}

export default list;
