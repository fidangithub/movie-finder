import React from "react";
import classes from "./MoreFilter.css";
import GenresSec from "./GenresSec/GenresSec";
import FilterSec from "./FilterSec/FilterSec";
import InputSec from "./InputSec/InputSec";
import RangeSec from "./RangeSec/RangeSec";
import RangeYear from "./RangeYear/RangeYear";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";

const moreFilter = props => {
    props.onGetGenres(props.filterType);
    let people = props.filterType === "movie" 
    ? (<InputSec input="people name..." iconName="user-plus" type="people" />)
    : null;
    return (
        <div className={classes.MoreFilter}>
            <p>Discover</p>
            <div className={classes.MoreFilterSections}>
                <GenresSec />
                {people}
                <InputSec input="keywords..." iconName="key" type="key" />
                <FilterSec />
                <RangeSec type="imdb" name="IMDB" />
                <RangeYear type="year"name="Release Year" />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetGenres: (filterType) => dispatch(actions.getGenres(filterType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(moreFilter); 