import React, { useState, useEffect } from "react";
import classes from "./RangeYear.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";


const rangeSection = (props) => {

    const [value, setValue] = useState(0);
    const [blueSpan, setBlueSpan] = useState(false);
    const [select, setSelect] = useState("Min");
    
    useEffect(() => {
        if (props.year.length === 0) {
            setValue(0);
        }
    }, [props.year]);

    const yearRange = [1900, 2024];
    
    let selectedYear = yearRange[0] + parseInt((+value / (100 - 7)) * (yearRange[1] - yearRange[0]));
    if (selectedYear > yearRange[1]) {
        selectedYear = yearRange[1];
    }
    const onSelect = (e) => {
        setSelect(e.target.value)
    }
    const minInputHandler = (event) => {
        setValue(event.target.value);
    }
    const addBlueSpan = () => {
        setBlueSpan(true);
    }
    const removeBlueSpan = () => {
        setBlueSpan(false);
    }
    const reduxHandler = () => {
        props.onHistoryAdded(select, selectedYear)
    }
    return (
        <div className={classes.RangeSection}>
            <div className={classes.Caption}>
                <div className={classes.Name}>
                    <FontAwesomeIcon icon={[`fas`, `history`]}
                        className={classes.NameIcon} />
                    <select name="year" id="year" className={classes.SelectType} 
                    onChange={onSelect}>
                        <option value="Min">Minimum Year</option>
                        <option value="Release">Release Year</option>
                        <option value="Max">Maximum Year</option>
                    </select>
                </div>
            </div>
            <div className={classes.RangeWrapper}>
                <div className={classes.RangeSlider}>
                    <span className={[classes.RangeSpan, blueSpan ? classes.Show : ""].join(" ")}
                        style={{ left: `${value * 1.83 - 6}px` }}>
                        <span>{selectedYear}</span>
                    </span>
                    <span className={classes.MultiRange} data-id={props.type} onClick={reduxHandler}
                    onTouchEnd={reduxHandler}>
                        <input type="range" min="0" max="100" value={value} id="lower"
                            onChange={minInputHandler}
                            onMouseEnter={addBlueSpan}
                            onTouchStart={addBlueSpan}
                            onMouseLeave={removeBlueSpan}
                            onTouchEnd={removeBlueSpan}
                            className={classes.Range} />
                    </span>
                    <span className={classes.MultiRangeTrack}> </span>
                </div>
                <div className={classes.Years}>
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                </div>
            </div>
        </div >
    );
}
const mapStateToProps = state => {
    return {
        year: state.filter.year
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHistoryAdded: (select, selectedYear) => dispatch(actions.addHistory(select, selectedYear))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(rangeSection));