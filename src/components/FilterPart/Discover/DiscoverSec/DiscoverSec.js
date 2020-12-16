import React, { useEffect } from "react";
import classes from "./DiscoverSec.css";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "./../../../../store/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const discoverSection = props => {
    return (
        <NavLink className={classes.DiscoverSection}
            activeClassName={classes.Active}
            to={`/discover/${props.type}`}
        >
            <FontAwesomeIcon icon={[`${props.iconType}`, `${props.icon}`]}
                className={classes.DiscoverIcon} />
            <p>{props.type}</p>
        </NavLink>
    )
}

export default discoverSection;