import React from "react";
import classes from "./MovieTime.css";

const time = props => {
    let lang = props.languageData.filter((langData)=>{
        return langData.iso_639_1 === props.language;
    })
    if(lang[0]){
        console.log(lang[0].name);
    }

    return (
        <div className={classes.Time}>
            <p className={classes.TimeElements}>{lang[0] ? lang[0].english_name : null}</p>
            {props.runtime ? <p className={classes.TimeElements}>{props.runtime} min</p> : null }
            <p className={classes.TimeElements}>{props.date.slice(0,4)}</p>
            {props.imdb  ? <p className={[classes.Imdb, classes.TimeElements].join(" ")}>IMDB 
    <span> {props.imdb} </span></p> : null }
        </div>
    );
}

export default time;
