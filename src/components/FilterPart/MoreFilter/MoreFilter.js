import React from "react";
import classes from "./MoreFilter.css";
import GenresSec from "./GenresSec/GenresSec";
import InputSec from "./InputSec/InputSec";
import RangeSec from "./RangeSec/RangeSec"

import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";

const moreFilter = props => {
    props.onGetGenres();
    return (
        <div className={classes.MoreFilter}>
            <p>Discover</p>
            <div className={classes.MoreFilterSections}>
                <GenresSec />
                <InputSec input="people name..." iconName="user-plus" type="people" />
                <InputSec input="keywords..." iconName="key" type="key" />
                <RangeSec type="imdb" iconType="fab" iconName="imdb" name="IMDB" />
                <RangeSec type="year" iconType="fas" iconName="history" name="Release Year" />
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onGetGenres: () => dispatch(actions.getGenres())
    }
}

export default connect(null, mapDispatchToProps)(moreFilter); 