import React from "react";
import classes from "./Discover.css";

import DiscoverSec from "./DiscoverSec/DiscoverSec";
import { connect } from "react-redux";

const discover = props => {
    let nowPlay;
    let upcoming;

    if(props.filterType==="movie"){
        nowPlay =(<DiscoverSec icon="youtube" iconType="fab" type="Now playing" />);
        upcoming = (<DiscoverSec icon="calendar-alt" iconType="far" type="Upcoming" />);
    }else{
        nowPlay =(<DiscoverSec icon="youtube" iconType="fab" type="On the air" />);
        upcoming = null;
    }
    return (
        <div className={classes.Discover}>
            {/* <p>Discover</p> */}
            <div className={classes.DiscoverSections}>
                <DiscoverSec icon="heart" iconType="far" type="Popular" />
                <DiscoverSec icon="signal" iconType="fas" type="Top rated" />
                {nowPlay}
                {upcoming}
                {/* <DiscoverSec icon="youtube" iconType="fab" type="Now playing" />
                <DiscoverSec icon="calendar-alt" iconType="far" type="Upcoming" /> */}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType
    }
}

export default connect(mapStateToProps)(discover);