import React from "react";
import classes from "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MovieTv from "./../../components/MovieTv/MovieTv";
import FilterPart from "./../../components/FilterPart/FilterPart"

const sidebar = props => {
    return (
        <div className={[classes.Sidebar, classes.SidebarOpen].join(" ")}>
            <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon} />
            <MovieTv />
            <FilterPart />
        </div>

    );
}

export default sidebar;