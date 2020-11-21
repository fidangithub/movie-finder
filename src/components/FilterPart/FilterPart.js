import React from "react";
import classes from "./FilterPart.css"
import Discover from "./Discover/Discover";
import MoreFilter from "./MoreFilter/MoreFilter";


const filterPart = props => {
    return (
        <div className={classes.FilterPart}>
            <Discover />
            <MoreFilter />
        </div>
    );
}

export default filterPart;