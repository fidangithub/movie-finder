import React, { useState, useEffect } from "react";
import classes from "./RangeSec.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/filter";

const rangeSection = (props) => {
    const [minRange, setMinRange] = useState("0");
    const [maxRange, setMaxRange] = useState("100");
    const [lowerSpan, setLowerSpan] = useState(false);
    const [upperSpan, setUpperSpan] = useState(false);

    useEffect(() => {
        if (props.type === "imdb") {
            if (props.imdb.length === 0) {
                setMinRange(0);
                setMaxRange(100)
            }
        } else {
            if (props.year.length === 0) {
                setMinRange(0);
                setMaxRange(100)
            }
        }
    }, [props.imdb, props.year])

    const range = props.type === "imdb" ? [1, 10] : [1900, 2020];

    let minValue = range[0] + parseInt((+minRange / (100 - 7)) * (range[1] - range[0]));
    if (minValue > range[1]) {
        minValue = range[1];
    }
    let maxValue = range[1] - parseInt(((100 - maxRange) / (100 - 7)) * (range[1] - range[0]));
    if (maxValue < range[0]) {
        maxValue = range[0];
    }

    const minInputHandler = (event) => {
        setMinRange(event.target.value);
    }
    const maxInputHandler = (event) => {
        setMaxRange(event.target.value);
    }
    const addLowerSpan = () => {
        setLowerSpan(true);
    }
    const removeLowerSpan = () => {
        setLowerSpan(false);
    }
    const addUpperSpan = () => {
        setUpperSpan(true);
    }
    const removeUpperSpan = () => {
        setUpperSpan(false);
    }
    const reduxHandler = () => {
        if (props.type === "imdb") {
            props.onImdbAdded(minValue, maxValue)
        } else if (props.type === "year") {
            props.onHistoryAdded(minValue, maxValue)
        }
    }
    //RANGE TRACK
    let margin = 6;
    let total = 230;
    let leftTrack = +minRange * 1.83 + margin;
    let rightTrack = total - (+maxRange * 1.83) - margin;


    if (+minRange > +maxRange - 7) {
        setMaxRange(+minRange + 7);
    }
    if (+maxRange < +minRange + 7) {
        setMinRange(+maxRange - 7);
    }
    if (minRange < 0) {
        setMinRange(0);
    }
    if (maxRange > 100) {
        setMaxRange(100);
    }

    // listen for redux state to change range input span
    let input;
    if (props.type === "imdb") {
        if (props.imdb.length === 0) {
            input = <React.Fragment><span>{range[0]}</span> - <span>{range[1]}</span></React.Fragment>
        } else {
            input = <React.Fragment><span>{props.imdb[0]}</span> - <span>{props.imdb[1]}</span></React.Fragment>
        }
    } else {
        if (props.year.length === 0) {
            input = <React.Fragment><span>{range[0]}</span> - <span>{range[1]}</span></React.Fragment>
        } else {
            input = <React.Fragment><span>{props.year[0]}</span> - <span>{props.year[1]}</span></React.Fragment>
        }
    }

    return (
        <div className={classes.RangeSection}>
            <div className={classes.Caption}>
                <div className={classes.Name}>
                    <FontAwesomeIcon icon={[`${props.iconType}`, `${props.iconName}`]}
                        className={classes.NameIcon} />
                    <p>{props.name}</p>
                </div>
                <p className=
                    {[classes.RangeInput, props.type === "imdb" ? classes.ImdbRange : classes.YearRange]
                        .join(" ")}>
                    {input}
                </p>
            </div>
            <div className={classes.RangeWrapper}>
                <div className={classes.RangeSlider}>
                    <span className={[classes.RangeLowerSpan, lowerSpan ? classes.Show : ""].join(" ")}
                        style={{ left: `${minRange * 1.83 - margin}px` }}>
                        <span>{minValue} </span>
                    </span>
                    <span className={[classes.RangeUpperSpan, upperSpan ? classes.Show : ""].join(" ")}
                        style={{ left: `${maxRange * 1.83 - margin}` + `px` }}>
                        <span>{maxValue}</span>
                    </span>
                    <span className={classes.MultiRange} data-id={props.type} onClick={reduxHandler} >
                        <input type="range" min="0" max="100" value={minRange} id="lower"
                            onChange={minInputHandler}
                            onMouseEnter={addLowerSpan}
                            onTouchStart={addLowerSpan}
                            onMouseLeave={removeLowerSpan}
                            onTouchEnd={removeLowerSpan}
                            className={classes.Range} />
                        <input type="range" min="0" max="100" value={maxRange} id="upper"
                            onChange={maxInputHandler}
                            onMouseEnter={addUpperSpan}
                            onTouchStart={addUpperSpan}
                            onMouseLeave={removeUpperSpan}
                            onTouchEnd={removeUpperSpan}
                            className={classes.Range} />
                    </span>
                    <span className={classes.MultiRangeTrack}
                        style={{
                            left: `${leftTrack}px`,
                            right: `${rightTrack}px`,
                            width: `${total - (leftTrack + rightTrack)}px`
                        }}>

                    </span>
                </div>
            </div>

        </div >
    );
}
const mapStateToProps = state => {
    return {
        imdb: state.filter.imdb,
        year: state.filter.year
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onImdbAdded: (minVal, maxVal) => dispatch(actions.addImdb(minVal, maxVal)),
        onHistoryAdded: (minVal, maxVal) => dispatch(actions.addHistory(minVal, maxVal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(rangeSection);
