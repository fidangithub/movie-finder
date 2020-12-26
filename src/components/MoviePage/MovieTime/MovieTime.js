import React from "react";
import classes from "./MovieTime.css";

const time = props => {
    let lang = props.languageData.filter((langData)=>{
        return langData.iso_639_1 === props.language;
    })
    return (
        <div className={classes.Time}>
            <p className={classes.TimeElements}>{lang[0] ? lang[0].english_name : null}</p>
            {props.runtime ? <p className={classes.TimeElements}>{props.runtime} min</p> : null }
            {props.date ? <p className={classes.TimeElements}>{props.date.slice(0,4)}</p> : null}
            {props.imdb  
            ? <div className={[classes.Imdb, classes.TimeElements].join(" ")}>
               <p>
                   IMDB <span> {props.imdb} </span>
                </p>
                <p>on {props.voteAverage} votes</p>
            </div>
            : null }
        </div>
    );
}

export default time;
