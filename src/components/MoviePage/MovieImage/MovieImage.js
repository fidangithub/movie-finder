import React, { useEffect } from "react";
import classes from "./MovieImage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyCover from "./../../../svg/emptyCover.svg"

const image = props => {
    let image;
    if(props.path){
        image = (<img src={`${props.url}w500/${props.path}`} alt="" className={classes.Shadow}/>);
    }else{
        image = (<img src={EmptyCover} alt=""/>);
    }
    return (
        <div className={classes.Image}>
            <div className={classes.ImageWrapper}>
                {image}
                <div className={classes.PlayButton}>
                <FontAwesomeIcon icon={["fas", "play"]} className={classes.Icon} />
                </div>
            </div>
        </div>
    )
}


export default image;
