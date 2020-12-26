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
    let imdb = Math.round(props.imdb / 2);
    let star = [];
    for(let i = 0; i< imdb; i++){
        star.push(<FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} 
        key={Math.random() * 12 + i + "fas" }/>);
    }
    for(let i = 0; i< 5-imdb; i++){
        star.push(<FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} 
        key={Math.random() * 12 + i + "far" }/>);
    }
    if(props.poster){
        image = (<img src={`${props.url}w500/${props.poster}`} alt="" className={classes.CardImage}/>);
    }else{
        image = (<img src={EmptyCover} alt="" className={classes.CardImage}/>);
    }

    let overviewData = props.overview;
    if (overviewData.split(" ").length >= 40) {
        overviewData = overviewData.split(" ").slice(0, 40).join(" ") + " .....";
    }
    return (
        <NavLink to={process.env.PUBLIC_URL +`/${props.filterType}/${props.id}`} className={classes.Card}>
            {image}
            <div className={classes.CardWrapper}>
                <div className={classes.CardWrap}></div>
            </div>
            <div className={classes.CardHeader}>
                <p className={classes.CardName}>{props.title}</p>
                <div className={classes.StarIconWrapper}>
                    {star}
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
