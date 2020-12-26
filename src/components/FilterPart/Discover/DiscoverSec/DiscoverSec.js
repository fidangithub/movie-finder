import React from "react";
import classes from "./DiscoverSec.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "./../../../../store/actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const discoverSection = props => {
    return (
        <NavLink className={classes.DiscoverSection}
            activeClassName={classes.Active}
            to={process.env.PUBLIC_URL + `/discover/${props.filterType}/${props.type}`}
        >
            <FontAwesomeIcon icon={[`${props.iconType}`, `${props.icon}`]}
                className={classes.DiscoverIcon} />
            <p>{props.type}</p>
        </NavLink>
    )
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType
    }
}
export default connect(mapStateToProps)(discoverSection);