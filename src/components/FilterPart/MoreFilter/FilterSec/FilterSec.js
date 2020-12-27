import React, { useState, useEffect } from "react";
import classes from "./FilterSec.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";


const rangeSection = (props) => {

    const [select, setSelect] = useState(null);

    const onSelect = (e) => {
        setSelect(e.target.value);
    }
    useEffect(()=>{
        props.onFilterSortAdded(select)
    },[select]);

    return (
        <div className={classes.FilterSection}>
            <div className={classes.Caption}>
                <div className={classes.Name}>
                    <FontAwesomeIcon icon={[`fas`, `sort`]}
                        className={classes.NameIcon} />
                    <select name="filterSort" id="filterSort" className={classes.SelectType} 
                    onChange={onSelect}>
                        <option value="popularity.desc">Sort By Popularity (max)</option>
                        <option value="popularity.asc">Sort By Popularity (min)</option>
                        <option value="release_date.desc">Sort By Date (max)</option>
                        <option value="release_date.asc">Sort By Date (min)</option>
                        <option value="vote_average.desc">Sort By Imdb (max)</option>
                        <option value="vote_average.asc">Sort By Imdb (min)</option>
                    </select>
                </div>
            </div>
        </div >
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterSortAdded: (selected) => dispatch(actions.addFilterSort(selected))
    }
}
export default withRouter(connect(null, mapDispatchToProps)(rangeSection));