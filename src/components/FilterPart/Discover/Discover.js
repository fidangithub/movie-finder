import React from "react";
import classes from "./Discover.css";

import DiscoverSec from "./DiscoverSec/DiscoverSec";

const discover = props => {
    return (
        <div className={classes.Discover}>
            {/* <p>Discover</p> */}
            <div className={classes.DiscoverSections}>
                <DiscoverSec icon="heart" iconType="far" type="Popular" />
                <DiscoverSec icon="signal" iconType="fas" type="Top rated" />
                <DiscoverSec icon="youtube" iconType="fab" type="Now playing" />
                <DiscoverSec icon="calendar-alt" iconType="far" type="Upcoming" />
            </div>
        </div>
    )
}

export default discover;